using DemoApiApp.Models;
using Microsoft.EntityFrameworkCore;

namespace DemoApiApp.Data
{
    public class ShoeContext : DbContext
    {

        public ShoeContext(DbContextOptions<ShoeContext> opt) : base(opt)
        {

        }

        public DbSet<Shoe> Shoes { get; set; }
    }

}

