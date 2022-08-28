using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RegistrationApi.Models
{
    public class Company
    {
        public Guid Id { get; set; }
        [MaxLength(50)]
        [Column(TypeName = "varchar")]
        public string CompanyName { get; set; }
        [MaxLength(50)]
        [Column(TypeName = "varchar")]
        public string CNPJ { get; set; }
        public Guid AddressId { get; set; }
        public virtual Address Address { get; set; }
        public virtual List<Person> People { get; set; }
    }
}
