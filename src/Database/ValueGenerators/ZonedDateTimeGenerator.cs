using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.ValueGeneration;
using NodaTime;

namespace Database.ValueGenerators;

public class ZonedDateTimeGenerator : ValueGenerator<ZonedDateTime>
{
    public override ZonedDateTime Next(EntityEntry entry)
        => SystemClock.Instance.GetCurrentInstant().InUtc();

    public override bool GeneratesTemporaryValues { get; } = false;
}