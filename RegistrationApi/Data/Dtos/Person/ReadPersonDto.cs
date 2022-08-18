using RegistrationApi.Data.Dtos.Address;
using RegistrationApi.Data.Dtos.Company;
using RegistrationApi.Models;

namespace RegistrationApi.Data.Dtos.Person
{
    public class ReadPersonDto
    {
        public Guid Id { get; set; }
        public string FullName { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public virtual ReadAddressDto Address { get; set; }
        public virtual ReadCompanyDto Company { get; set; }
    }
}
