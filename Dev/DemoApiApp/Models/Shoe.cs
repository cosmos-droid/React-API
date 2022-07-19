using System.ComponentModel.DataAnnotations;

namespace DemoApiApp.Models
{
    public class Shoe
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int ShoeSize { get; set; }
        [Required]
        public string shoeAdress { get; set; }
        [Required]
        public bool isRight { get; set; }
    }

}