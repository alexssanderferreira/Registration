using AutoMapper;
using FluentResults;
using RegistrationApi.Data;
using RegistrationApi.Data.Dtos.Company;
using RegistrationApi.Models;

namespace RegistrationApi.Services
{
        public class CompanyService
        {
            private AppDbContext _context;
            private IMapper _mapper;
            private AddressService _addressService;

            public CompanyService(AppDbContext context, IMapper mapper, AddressService addressService)
            {
                _context = context;
                _mapper = mapper;
                _addressService = addressService;
            }

            public ReadCompanyDto AddCompany(CreateCompanyDto companyDto)
            {
                
                Company company = _mapper.Map<Company>(companyDto);
                //company.AddressId = _addressService.AddAddress(companyDto.Address).Id;
                _context.Companies.Add(company);
                _context.SaveChanges();
                return _mapper.Map<ReadCompanyDto>(company);
            }

            public List<ReadCompanyDto> GetCompanies()
            {
                List<Company> companies = _context.Companies.ToList();
                return _mapper.Map<List<ReadCompanyDto>>(companies);
            }

            public ReadCompanyDto GetCompanyById(Guid id)
            {
                Company company = _context.Companies.FirstOrDefault(company => company.Id == id);
                if (company != null)
                {
                    ReadCompanyDto companyDto = _mapper.Map<ReadCompanyDto>(company);

                    return companyDto;
                }
                return null;
            }

            public Result PutCompany(Guid id, UpdateCompanyDto companyDto)
            {
                Company company = _context.Companies.FirstOrDefault(company => company.Id == id);
                if (company == null)
                {
                    return Result.Fail("Company NotFound");
                }
                _mapper.Map(companyDto, company);
                _context.SaveChanges();
                return Result.Ok();
            }

            public Result DeleteCompany(Guid id)
            {
                Company company = _context.Companies.FirstOrDefault(company => company.Id == id);
                if (company == null)
                {
                    return Result.Fail("Company NotFound");
                }
                _context.Remove(company);
                _context.SaveChanges();
                _addressService.DeleteAddress(company.AddressId);
                return Result.Ok();
            }
        }
    }

