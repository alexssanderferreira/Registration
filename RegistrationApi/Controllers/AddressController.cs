using FluentResults;
using Microsoft.AspNetCore.Mvc;
using RegistrationApi.Data.Dtos.Address;
using RegistrationApi.Services;

namespace RegistrationApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddressController:ControllerBase
    {
        private AddressService _addressService;

        public AddressController(AddressService addressService)
        {
            _addressService = addressService;
        }

        [HttpPost]
        public IActionResult AddAddress([FromBody] CreateAddressDto addressDto)
        {
            ReadAddressDto readDto = _addressService.AddAddress(addressDto);
            return CreatedAtAction(nameof(GetAddressById), new { Id = readDto.Id }, readDto);
        }

        [HttpGet]
        public IActionResult GetAdresses()
        {
            List<ReadAddressDto> readDto = _addressService.GetAdresses();
            return Ok(readDto);
        }

        [HttpGet("{id}")]
        public IActionResult GetAddressById(Guid id)
        {
            ReadAddressDto readDto = _addressService.GetAddressById(id);
            if (readDto == null) return NotFound();
            return Ok(readDto);
        }

        [HttpPut("{id}")]
        public IActionResult PutAddress(Guid id, [FromBody] UpdateAddressDto addressDto)
        {
            Result result = _addressService.PutAddress(id, addressDto);
            if (result.IsFailed) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAddress(Guid id)
        {
            Result result = _addressService.DeleteAddress(id);
            if (result.IsFailed) return NotFound();
            return NoContent();
        }
    }
}
