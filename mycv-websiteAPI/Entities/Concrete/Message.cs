using System;
using System.ComponentModel.DataAnnotations;

namespace mycv_websiteAPI.Entities.Concrete
{
    public class Message
    {
        [Key]
        public int ContactId { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Subject { get; set; }

        public string Messages { get; set; }
    }
}

