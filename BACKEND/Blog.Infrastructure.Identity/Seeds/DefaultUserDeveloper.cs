﻿using Blog.Core.Application.Enums;
using Blog.Infrastructure.Identity.Entities;
using Microsoft.AspNetCore.Identity;

namespace Blog.Infrastructure.Identity.Seeds
{
    public static class DefaultUserDeveloper
    {
        public static async Task SeedAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            var defaultUser = new ApplicationUser
            {
                FirstName = "UserDeveloper",
                LastName = "Developer",
                Email = "UserDeveloper@gmail.com",
                UserName = "UserDeveloper",
                EmailConfirmed = true,
                PhoneNumberConfirmed = true
            };

            if(userManager.Users.All(x => x.Id != defaultUser.Id))
            {
                var user = await userManager.FindByEmailAsync(defaultUser.Email);
                if(user == null)
                {
                    await userManager.CreateAsync(defaultUser, "123Pa$$word!");
                    await userManager.AddToRoleAsync(defaultUser, Roles.Developer.ToString());
                }
            }
        }
    }
}
