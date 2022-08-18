using System.Text.Json.Serialization;

namespace RegistrationApi.Models
{
    public class Person
    {
        public Guid Id { get; set; }
        public string FullName { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public virtual Address Address { get; set; }
        public Guid AddressId { get; set; }
        public virtual Company Company { get; set; }
        public Guid CompanyId { get; set; }
    }
}
