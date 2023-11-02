using Npgsql;
using System;
namespace backend_dotnet_core.Utilities;

public class CsvDataImporter
{
    private readonly string _connectionString;
    private readonly string _tableName;

    public CsvDataImporter()
    {
        _connectionString = "Host=localhost;Port=5432;Database=courses_db_dotnet;Username=ibrahim;Password=password";
        _tableName = "\"Courses\"";
    }

    public void ImportDataFromCsv()
    {
        string absoluteCsvFilePath = Path.GetFullPath("./Utilities/arch.csv");
        using (var conn = new NpgsqlConnection(_connectionString))
        {
            conn.Open();
            string copyCommand = $@"
                COPY {_tableName} (
                    course_code,
                    mapped_by,
                    department,
                    course_name,
                    competency_class,
                    reasoning_interpretation,
                    complex_problem_solving,
                    creative_thinking,
                    effective_communication,
                    future_intelligence,
                    building_managing_relationships,
                    fostering_effective_collaboration,
                    social_interpersonal_communication,
                    digital_fluency,
                    prototyping_design,
                    culture_identity_society,
                    business_society,
                    science_technology_society,
                    self_awareness_self_management,
                    resilience_grit,
                    inquisitive_spirit,
                    ethics_values,
                    course_comments
                )
                FROM '{absoluteCsvFilePath}' DELIMITER ',' CSV HEADER;";
            using (var cmd = new NpgsqlCommand(copyCommand, conn))
            {
                cmd.ExecuteNonQuery();
            }
        }
    }
}
