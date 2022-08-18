namespace RegistrationApi.Data.Dtos.Address
{
    public class UpdateAddressDto
    {
        public string StreetName { get; set; }
        public int Number { get; set; }
        public string District { get; set; }
        public string ZipCode { get; set; }
    }
}
