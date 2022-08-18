using System.Text.Json.Serialization;

namespace RegistrationApi.Models
{
    public class Company
    {
        public Guid Id { get; set; }
        public string CompanyName { get; set; }
        public string CNPJ { get; set; }
        public Guid AddressId { get; set; }
        public virtual Address Address { get; set; }
        public virtual List<Person> People { get; set; }
    }
}
