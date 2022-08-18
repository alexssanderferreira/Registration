using RegistrationApi.Data.Dtos.Address;
using RegistrationApi.Data.Dtos.Company;
using RegistrationApi.Models;

namespace RegistrationApi.Data.Dtos.Person
{
    public class CreatePersonDto
    {
        public string FullName { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public CreateAddressDto Address { get; set; }
        public Guid CompanyId { get; set; }
    }
}
