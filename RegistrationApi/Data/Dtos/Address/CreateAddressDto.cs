namespace RegistrationApi.Data.Dtos.Address
{
    public class CreateAddressDto
    {
        public string StreetName { get; set; }
        public int Number { get; set; }
        public string District { get; set; }
        public string ZipCode { get; set; }
    }
}
