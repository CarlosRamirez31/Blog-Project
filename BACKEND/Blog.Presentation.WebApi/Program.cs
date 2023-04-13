using Blog.Core.Application;
using Blog.Infrastructure.Identity;
using Blog.Infrastructure.Identity.Entities;
using Blog.Infrastructure.Identity.Seeds;
using Blog.Infrastructure.Persistence;
using Blog.Presentation.WebApi.Extensions;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

builder.Services.AddPersistenceInfrastructure(configuration);
builder.Services.AddApplicationCore();
builder.Services.AddIdentityInfrastructure(configuration);
builder.Services.AddSwaggerExtension();
builder.Services.AddVersioningExtension();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

using(var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
        var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();

        await DefaultRoles.SeedAsync(userManager, roleManager);
        await DefaultUserAdmin.SeedAsync(userManager, roleManager);
        await DefaultUserDeveloper.SeedAsync(userManager, roleManager);
        await DefaultUserBasic.SeedAsync(userManager, roleManager);
    }
    catch(Exception ex)
    {

    }
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseErrorHandlerMiddleware();

app.MapControllers();

app.Run();
