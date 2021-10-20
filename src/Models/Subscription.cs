using NodaTime;

namespace Models
{
    public class Subscription
    {
        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public ZonedDateTime CreatedAt { get; set; }
        public ZonedDateTime? UpdatedAt { get; set; }
    }
}
