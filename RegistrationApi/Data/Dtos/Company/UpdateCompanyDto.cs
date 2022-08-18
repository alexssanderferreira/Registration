using RegistrationApi.Data.Dtos.Address;

namespace RegistrationApi.Data.Dtos.Company
{
    public class UpdateCompanyDto
    {
        public string CompanyName { get; set; }
        public string CNPJ { get; set; }
        public UpdateAddressDto Address { get; set; }
    }
}
