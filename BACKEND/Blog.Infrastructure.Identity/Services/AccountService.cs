using AutoMapper;
using Blog.Core.Application.Dtos.User;
using Blog.Core.Application.Enums;
using Blog.Core.Application.Exceptions;
using Blog.Core.Application.Interfaces.Services;
using Blog.Infrastructure.Identity.Entities;
using Microsoft.AspNetCore.Identity;

namespace Blog.Infrastructure.Identity.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;

        public AccountService(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        public async Task<string> RegisterUser(RegisterRequest request)
        {
            var user = await userManager.FindByNameAsync(request.UserName);
            if (user is not null)
                throw new ApiException($"El nombre de usuario {request.UserName} ya ha sido registrado");

            var email = await userManager.FindByEmailAsync(request.Email);
            if (email is not null)
                throw new ApiException($"El email {request.Email} ya ha sido registrado");

            user = new ApplicationUser
            {
                LastName = request.LastName,
                FirstName = request.FirstName,
                Email = request.Email,
                UserName = request.UserName,
                EmailConfirmed = true,
                PhoneNumberConfirmed = true
            };

            var result = await userManager.CreateAsync(user, request.Password);
            if (!result.Succeeded)
                throw new ApiException($"Error {result.Errors}");

            await userManager.AddToRoleAsync(user, Roles.Basic.ToString());
            string response = "Se ha registrado un usuario correctamente";
            return response;
        }

        public Task<AuthenticationResponse> Authentication(AuthenticationRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
