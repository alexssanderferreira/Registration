using FluentResults;
using Microsoft.AspNetCore.Mvc;
using RegistrationApi.Data.Dtos.Company;
using RegistrationApi.Services;

namespace RegistrationApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CompanyController:ControllerBase
    {
        private CompanyService _companyService;

        public CompanyController(CompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpPost]
        public IActionResult AddCompany([FromBody] CreateCompanyDto companyDto)
        {
            ReadCompanyDto readDto = _companyService.AddCompany(companyDto);
            return CreatedAtAction(nameof(GetCompanyById), new { Id = readDto.Id }, readDto);
        }

        [HttpGet]
        public IActionResult GetCompany()
        {
            List<ReadCompanyDto> readDto = _companyService.GetCompanies();
            return Ok(readDto);
        }

        [HttpGet("{id}")]
        public IActionResult GetCompanyById(Guid id)
        {
            ReadCompanyDto readDto = _companyService.GetCompanyById(id);
            if (readDto == null) return NotFound();
            return Ok(readDto);
        }

        [HttpPut("{id}")]
        public IActionResult PutCompany(Guid id, [FromBody] UpdateCompanyDto companyDto)
        {
            Result result = _companyService.PutCompany(id, companyDto);
            if (result.IsFailed) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCompany(Guid id)
        {
            Result result = _companyService.DeleteCompany(id);
            if (result.IsFailed) return NotFound();
            return NoContent();
        }
    }
}
