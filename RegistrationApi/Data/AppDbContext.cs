using Microsoft.EntityFrameworkCore;
using RegistrationApi.Models;

namespace RegistrationApi.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Person>()
                    .HasOne(person => person.Company)
                    .WithMany(company => company.People)
                    .HasForeignKey(person => person.CompanyId)
                    .OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Person>()
                    .HasOne(person => person.Address)
                    .WithOne(address => address.Person)
                    .HasForeignKey<Person>(person => person.AddressId)
                    .OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Company>()
                    .HasOne(company => company.Address)
                    .WithOne(address => address.Company)
                    .HasForeignKey<Company>(company => company.AddressId)
                    .OnDelete(DeleteBehavior.NoAction);
        }

        public DbSet<Person> People { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Address> Adresses { get; set; }
    }
}
