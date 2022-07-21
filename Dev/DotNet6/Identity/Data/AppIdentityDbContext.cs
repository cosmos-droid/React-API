using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Identity.Models.Users;


namespace Identity.Data
{
    public class AppIdentityDbContext : IdentityDbContext<Users>
    {
        public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : 
        base(options){ } 


    }
}