using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace backend_dotnet_core.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    course_code = table.Column<string>(type: "text", nullable: false),
                    mapped_by = table.Column<string>(type: "text", nullable: false),
                    department = table.Column<string>(type: "text", nullable: false),
                    course_name = table.Column<string>(type: "text", nullable: false),
                    competency_class = table.Column<string>(type: "text", nullable: false),
                    reasoning_interpretation = table.Column<string>(type: "text", nullable: false),
                    complex_problem_solving = table.Column<string>(type: "text", nullable: false),
                    creative_thinking = table.Column<string>(type: "text", nullable: false),
                    effective_communication = table.Column<string>(type: "text", nullable: false),
                    future_intelligence = table.Column<string>(type: "text", nullable: false),
                    building_managing_relationships = table.Column<string>(type: "text", nullable: false),
                    fostering_effective_collaboration = table.Column<string>(type: "text", nullable: false),
                    social_interpersonal_communication = table.Column<string>(type: "text", nullable: false),
                    digital_fluency = table.Column<string>(type: "text", nullable: false),
                    prototyping_design = table.Column<string>(type: "text", nullable: false),
                    culture_identity_society = table.Column<string>(type: "text", nullable: false),
                    business_society = table.Column<string>(type: "text", nullable: false),
                    science_technology_society = table.Column<string>(type: "text", nullable: false),
                    self_awareness_self_management = table.Column<string>(type: "text", nullable: false),
                    resilience_grit = table.Column<string>(type: "text", nullable: false),
                    inquisitive_spirit = table.Column<string>(type: "text", nullable: false),
                    ethics_values = table.Column<string>(type: "text", nullable: false),
                    course_comments = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Courses");
        }
    }
}
