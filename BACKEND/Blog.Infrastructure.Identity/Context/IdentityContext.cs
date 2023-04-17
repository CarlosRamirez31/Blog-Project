using Blog.Infrastructure.Identity.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Blog.Infrastructure.Identity.Context
{
    public class IdentityContext : IdentityDbContext<ApplicationUser>
    {
        public IdentityContext(DbContextOptions<IdentityContext> option): base(option) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.HasDefaultSchema("Identity");

            builder.Entity<ApplicationUser>().ToTable(name: "User");

            builder.Entity<IdentityUserClaim<string>>().ToTable(name: "UserClaim");

            builder.Entity<IdentityUserLogin<string>>().ToTable(name: "UserLogin");

            builder.Entity<IdentityUserToken<string>>().ToTable(name: "UserToken");

            builder.Entity<IdentityRole>().ToTable(name: "Role");

            builder.Entity<IdentityRoleClaim<string>>().ToTable(name: "RoleClaim");

            builder.Entity<IdentityUserRole<string>>().ToTable(name: "UserRole");
        }
    }
}
