using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RegistrationApi.Models
{
    public class Address
    {
        public Guid Id { get; set; }
        [MaxLength(50)]
        [Column(TypeName = "varchar")]
        public string StreetName { get; set; }
        public int Number { get; set; }
        [MaxLength(50)]
        [Column(TypeName = "varchar")]
        public string District { get; set; }
        [MaxLength(50)]
        [Column(TypeName = "varchar")]
        public string ZipCode { get; set; }
        [JsonIgnore]
        public virtual Person Person { get; set; }
        [JsonIgnore]
        public virtual Company Company { get; set; }
    }
}
