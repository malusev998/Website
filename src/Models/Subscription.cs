using NodaTime;

namespace Models
{
    public class Subscription
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public ZonedDateTime CreatedAt { get; set; }
        public ZonedDateTime? UpdatedAt { get; set; }
    }
}
