using RegistrationApi.Data.Dtos.Address;

namespace RegistrationApi.Data.Dtos.Person
{
    public class UpdatePersonDto
    {
        public string FullName { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public UpdateAddressDto Address { get; set; }
        public Guid CompanyId { get; set; }
    }
}
