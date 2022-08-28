using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RegistrationApi.Models
{
    public class Person
    {
        public Guid Id { get; set; }
        [MaxLength(50)]
        [Column(TypeName = "varchar")]
        public string FullName { get; set; }
        [MaxLength(50)]
        [Column(TypeName = "varchar")]
        public string CPF { get; set; }
        [MaxLength(50)]
        [Column(TypeName = "varchar")]
        public string Email { get; set; }
        public virtual Address Address { get; set; }
        public Guid AddressId { get; set; }
        public virtual Company Company { get; set; }
        public Guid CompanyId { get; set; }
    }
}
