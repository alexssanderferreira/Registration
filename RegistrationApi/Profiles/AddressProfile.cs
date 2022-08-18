using AutoMapper;
using RegistrationApi.Data.Dtos.Address;
using RegistrationApi.Models;

namespace RegistrationApi.Profiles
{
    public class AddressProfile:Profile
    {
        public AddressProfile()
        {
            CreateMap<CreateAddressDto, Address>();
            CreateMap<Address, ReadAddressDto>();
            CreateMap<UpdateAddressDto, Address>();
        }
    }
}
