using AutoMapper;
using RegistrationApi.Data.Dtos.Company;
using RegistrationApi.Models;

namespace RegistrationApi.Profiles
{
    public class CompanyProfile: Profile
    {
        public CompanyProfile()
        {
            CreateMap<CreateCompanyDto, Company>();
            CreateMap<Company, ReadCompanyDto>();
            CreateMap<UpdateCompanyDto, Company>();
        }
    }
}
