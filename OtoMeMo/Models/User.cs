using System.ComponentModel.DataAnnotations;

namespace OtoMeMo.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string DisplayName { get; set; }

        public DateTime DateJoined { get; set; }
        public DateTime LastLogin { get; set; }

        public string Bio { get; set; }

        public string DisplayPicture { get; set; }

        [Required]
        public string Email { get; set; }
    }
}
