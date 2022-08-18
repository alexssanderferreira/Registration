using AutoMapper;
using FluentResults;
using RegistrationApi.Data;
using RegistrationApi.Data.Dtos.Person;
using RegistrationApi.Models;

namespace RegistrationApi.Services
{
    public class PersonService
    {
        private AppDbContext _context;
        private IMapper _mapper;
        private AddressService _addressService;

        public PersonService(AppDbContext context, IMapper mapper, AddressService addressService)
        {
            _context = context;
            _mapper = mapper;
            _addressService = addressService;
        }

        public ReadPersonDto AddPerson(CreatePersonDto personDto)
        {
            Person person = _mapper.Map<Person>(personDto);
            _context.People.Add(person);
            _context.SaveChanges();
            return _mapper.Map<ReadPersonDto>(person);
        }

        public List<ReadPersonDto> GetPeople()
        {
            List<Person> people = _context.People.ToList();
            return _mapper.Map<List<ReadPersonDto>>(people);
        }

        public ReadPersonDto GetPersonById(Guid id)
        {
            Person person = _context.People.FirstOrDefault(person => person.Id == id);
            if (person != null)
            {
                ReadPersonDto personDto = _mapper.Map<ReadPersonDto>(person);

                return personDto;
            }
            return null;
        }

        public Result PutPerson(Guid id, UpdatePersonDto personDto)
        {
            Person person = _context.People.FirstOrDefault(person => person.Id == id);
            if (person == null)
            {
                return Result.Fail("Person NotFound");
            }
            _mapper.Map(personDto, person);
            _context.SaveChanges();
            return Result.Ok();
        }

        public Result DeletePerson(Guid id)
        {
            Person person = _context.People.FirstOrDefault(person => person.Id == id);
            if (person == null)
            {
                return Result.Fail("Person NotFound");
            }
            _context.Remove(person);
            _context.SaveChanges();
            _addressService.DeleteAddress(person.AddressId);
            return Result.Ok();
        }

    }
}
