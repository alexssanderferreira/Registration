using FluentResults;
using Microsoft.AspNetCore.Mvc;
using RegistrationApi.Data.Dtos.Person;
using RegistrationApi.Models;
using RegistrationApi.Services;

namespace RegistrationApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController:ControllerBase
    {
        private PersonService _personService;

        public PersonController(PersonService personService)
        {
            _personService = personService;
        }

        [HttpPost]
        public IActionResult AddPerson([FromBody] CreatePersonDto personDto)
        {
            ReadPersonDto readDto = _personService.AddPerson(personDto);
            return CreatedAtAction(nameof(GetPersonById), new { Id = readDto.Id }, readDto);
        }

        [HttpGet]
        public IActionResult GetPeople()
        {
            List<ReadPersonDto> readDto = _personService.GetPeople();
            return Ok(readDto);
        }

        [HttpGet("{id}")]
        public IActionResult GetPersonById(Guid id)
        {
            ReadPersonDto readDto = _personService.GetPersonById(id);
            if (readDto == null) return NotFound();
            return Ok(readDto);
        }

        [HttpPut("{id}")]
        public IActionResult PutPerson(Guid id, [FromBody] UpdatePersonDto personDto)
        {
            Result result = _personService.PutPerson(id, personDto);
            if (result.IsFailed) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePerson(Guid id)
        {
            Result result = _personService.DeletePerson(id);
            if (result.IsFailed) return NotFound();
            return NoContent();
        }
    }
}
