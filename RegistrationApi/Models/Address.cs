using System.Text.Json.Serialization;

namespace RegistrationApi.Models
{
    public class Address
    {
        public Guid Id { get; set; }
        public string StreetName { get; set; }
        public int Number { get; set; }
        public string District { get; set; }
        public string ZipCode { get; set; }
        [JsonIgnore]
        public virtual Person Person { get; set; }
        [JsonIgnore]
        public virtual Company Company { get; set; }
    }
}
