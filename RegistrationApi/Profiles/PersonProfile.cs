using AutoMapper;
using RegistrationApi.Data.Dtos.Person;
using RegistrationApi.Models;

namespace RegistrationApi.Profiles
{
    public class PersonProfile:Profile
    {
        public PersonProfile()
        {
            CreateMap<CreatePersonDto, Person>();
            CreateMap<Person, ReadPersonDto>();
            CreateMap<UpdatePersonDto, Person>();
        }
    }
}
