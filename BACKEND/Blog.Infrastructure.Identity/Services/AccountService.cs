using AutoMapper;
using Blog.Core.Application.Dtos.User;
using Blog.Core.Application.Enums;
using Blog.Core.Application.Exceptions;
using Blog.Core.Application.Interfaces.Services;
using Blog.Infrastructure.Identity.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Blog.Infrastructure.Identity.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _configuration;

        public AccountService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        public async Task<RegisterResponse> RegisterUser(RegisterRequest request)
        {
            var user = await _userManager.FindByNameAsync(request.UserName);
            if (user is not null)
                throw new ApiException($"El nombre de usuario {request.UserName} ya ha sido registrado");

            var email = await _userManager.FindByEmailAsync(request.Email);
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

            var result = await _userManager.CreateAsync(user, request.Password);
            if (!result.Succeeded)
                throw new ApiException($"Error {result.Errors}");

            await _userManager.AddToRoleAsync(user, Roles.Basic.ToString());
            return new RegisterResponse() { Id = user.Id, Mesasge = "Se ha reigstrado un usuario correctamente"};
        }

        public async Task<AuthenticationResponse> Authentication(AuthenticationRequest request)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user is null)
                throw new ApiException("El usuario o la contraseña es incorrecta");

            var result = await _signInManager.PasswordSignInAsync(user, request.Password, false, false);
            if (!result.Succeeded)
                throw new ApiException("El usuario o la contraseña es incorrecto");

            JwtSecurityToken jwtSecurityToken = await GenerateJWToken(user);

            AuthenticationResponse response = new AuthenticationResponse();
            response.Id = user.Id;
            response.UserName = user.UserName;
            response.Email = user.Email;
            response.IsVerified = user.EmailConfirmed;
            response.JWToken = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);

            return response;
        }

        private async Task<JwtSecurityToken> GenerateJWToken(ApplicationUser user)
        {
            var userClaims = await _userManager.GetClaimsAsync(user);
            var roles = await _userManager.GetRolesAsync(user);


            var roleClaim = new List<Claim>();
            foreach(var role in roles)
            {
                roleClaim.Add(new Claim("roles", role));
            }

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim("id", user.Id)
            }
            .Union(userClaims)
            .Union(roleClaim);

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var signingCredential = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var jwtSecurityToken = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(int.Parse(_configuration["Jwt:DurationInMinute"])),
                signingCredentials: signingCredential
            );

            return jwtSecurityToken;
        }
    }
}
