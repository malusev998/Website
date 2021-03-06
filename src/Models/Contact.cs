using NodaTime;

namespace Models
{
    public class Contact
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public ZonedDateTime CreatedAt { get; set; }
        public ZonedDateTime? UpdatedAt { get; set; }
    }
}
