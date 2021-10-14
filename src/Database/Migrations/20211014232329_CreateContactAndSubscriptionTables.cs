using Microsoft.EntityFrameworkCore.Migrations;
using NodaTime;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Database.Migrations
{
    public partial class CreateContactAndSubscriptionTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "public");

            migrationBuilder.AlterDatabase()
                .Annotation("Npgsql:PostgresExtension:hstore", ",,")
                .Annotation("Npgsql:PostgresExtension:pg_stat_statements", ",,")
                .Annotation("Npgsql:PostgresExtension:pgcrypto", ",,")
                .Annotation("Npgsql:PostgresExtension:uuid-ossp", ",,");

            migrationBuilder.CreateSequence(
                name: "contact_hilo",
                schema: "public",
                incrementBy: 10);

            migrationBuilder.CreateSequence(
                name: "subscription_hilo",
                schema: "public",
                incrementBy: 10);

            migrationBuilder.CreateTable(
                name: "contacts",
                schema: "public",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false),
                    name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    email = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false),
                    subject = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    message = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: false),
                    created_at = table.Column<ZonedDateTime>(type: "timestamp with time zone", nullable: false),
                    updated_at = table.Column<ZonedDateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_contacts", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "subscriptions",
                schema: "public",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false),
                    name = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    email = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false),
                    created_at = table.Column<ZonedDateTime>(type: "timestamp with time zone", nullable: false),
                    updated_at = table.Column<ZonedDateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_subscriptions", x => x.id);
                });

            migrationBuilder.CreateIndex(
                name: "ix_subscriptions_email",
                schema: "public",
                table: "subscriptions",
                column: "email",
                unique: true)
                .Annotation("Npgsql:CreatedConcurrently", true)
                .Annotation("Npgsql:IndexSortOrder", new[] { SortOrder.Descending });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "contacts",
                schema: "public");

            migrationBuilder.DropTable(
                name: "subscriptions",
                schema: "public");

            migrationBuilder.DropSequence(
                name: "contact_hilo",
                schema: "public");

            migrationBuilder.DropSequence(
                name: "subscription_hilo",
                schema: "public");
        }
    }
}
