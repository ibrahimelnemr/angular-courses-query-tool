using Microsoft.EntityFrameworkCore;

namespace backend_dotnet_core.Models
{
	public class CourseContext : DbContext
	{
		public CourseContext(DbContextOptions<CourseContext> options) : base (options)
		{
		}

		public DbSet<Course> Courses { get; set; } = null!;
	}
}

