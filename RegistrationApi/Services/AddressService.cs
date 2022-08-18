using AutoMapper;
using FluentResults;
using RegistrationApi.Data;
using RegistrationApi.Data.Dtos.Address;
using RegistrationApi.Models;

namespace RegistrationApi.Services
{
    public class AddressService
    {
        private AppDbContext _context;
        private IMapper _mapper;

        public AddressService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public ReadAddressDto AddAddress(CreateAddressDto addressDto)
        {
            Address address = _mapper.Map<Address>(addressDto);
            _context.Adresses.Add(address);
            _context.SaveChanges();
            return _mapper.Map<ReadAddressDto>(address);
        }

        public List<ReadAddressDto> GetAdresses()
        {
            List<Address> adresses = _context.Adresses.ToList();
            return _mapper.Map<List<ReadAddressDto>>(adresses);
        }

        public ReadAddressDto GetAddressById(Guid id)
        {
            Address address = _context.Adresses.FirstOrDefault(address => address.Id == id);
            if (address != null)
            {
                ReadAddressDto addressDto = _mapper.Map<ReadAddressDto>(address);

                return addressDto;
            }
            return null;
        }

        public Result PutAddress(Guid id, UpdateAddressDto addressDto)
        {
            Address address = _context.Adresses.FirstOrDefault(address => address.Id == id);
            if (address == null)
            {
                return Result.Fail("Address NotFound");
            }
            _mapper.Map(addressDto, address);
            _context.SaveChanges();
            return Result.Ok();
        }

        public Result DeleteAddress(Guid id)
        {
            Address address = _context.Adresses.FirstOrDefault(address => address.Id == id);
            if (address == null)
            {
                return Result.Fail("Address NotFound");
            }
            _context.Remove(address);
            _context.SaveChanges();
            return Result.Ok();
        }
    }
}
