using Microsoft.EntityFrameworkCore;
using mycv_websiteAPI.Entities.Concrete;

namespace mycv_websiteAPI.Data
{
    public class Context : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=mycv-websiteAPIDatabase;Username=myuser;Password=mypassword");
        }
        public DbSet<Message> Messages { get; set; }
    }
}