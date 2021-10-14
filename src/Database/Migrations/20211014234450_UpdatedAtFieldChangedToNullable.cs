using Microsoft.EntityFrameworkCore.Migrations;
using NodaTime;

#nullable disable

namespace Database.Migrations
{
    public partial class UpdatedAtFieldChangedToNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<ZonedDateTime>(
                name: "updated_at",
                schema: "public",
                table: "subscriptions",
                type: "timestamp with time zone",
                nullable: true,
                oldClrType: typeof(ZonedDateTime),
                oldType: "timestamp with time zone");

            migrationBuilder.AlterColumn<ZonedDateTime>(
                name: "updated_at",
                schema: "public",
                table: "contacts",
                type: "timestamp with time zone",
                nullable: true,
                oldClrType: typeof(ZonedDateTime),
                oldType: "timestamp with time zone");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<ZonedDateTime>(
                name: "updated_at",
                schema: "public",
                table: "subscriptions",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new NodaTime.ZonedDateTime(NodaTime.Instant.FromUnixTimeTicks(-621355968000000000L), NodaTime.TimeZones.TzdbDateTimeZoneSource.Default.ForId("UTC")),
                oldClrType: typeof(ZonedDateTime),
                oldType: "timestamp with time zone",
                oldNullable: true);

            migrationBuilder.AlterColumn<ZonedDateTime>(
                name: "updated_at",
                schema: "public",
                table: "contacts",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new NodaTime.ZonedDateTime(NodaTime.Instant.FromUnixTimeTicks(-621355968000000000L), NodaTime.TimeZones.TzdbDateTimeZoneSource.Default.ForId("UTC")),
                oldClrType: typeof(ZonedDateTime),
                oldType: "timestamp with time zone",
                oldNullable: true);
        }
    }
}
