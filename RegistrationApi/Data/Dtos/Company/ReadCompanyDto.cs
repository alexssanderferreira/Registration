using RegistrationApi.Data.Dtos.Address;

namespace RegistrationApi.Data.Dtos.Company
{
    public class ReadCompanyDto
    {
        public Guid Id { get; set; }
        public string CompanyName { get; set; }
        public string CNPJ { get; set; }
        public virtual ReadAddressDto Address { get; set; }
    }
}
