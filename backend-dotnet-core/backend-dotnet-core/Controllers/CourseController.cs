using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend_dotnet_core;
using backend_dotnet_core.Models;

namespace backend_dotnet_core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly CourseContext _context;

        public CourseController(CourseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetCoursesByCompetency([FromQuery] string competency)
        {
            var courseProperties = typeof(Course).GetProperties();

            var courses = _context.Courses
                .AsEnumerable()
                .Where(c => courseProperties
                    .Where(
                        p => p.PropertyType == typeof(string)
                        && p.Name != "course_name"
                        && p.Name != "course_comments"
                    )
                    .Any(p =>
                        (string)p.GetValue(c, null) != null &&
                        ((string)p.GetValue(c,null))
                        .IndexOf(competency,StringComparison.OrdinalIgnoreCase) >= 0)
                    )

                .Select(c => c.course_name)
                .Distinct()
                .ToList();

            return Ok(courses);
        }

        // GET: api/Course
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        //{
        //    if (_context.Courses == null)
        //    {
        //        return NotFound();
        //    }
        //    return await _context.Courses.ToListAsync();
        //}

        // GET: api/Course/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            if (_context.Courses == null)
            {
                return NotFound();
            }
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound();
            }

            return course;
        }

        // PUT: api/Course/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(int id, Course course)
        {
            if (id != course.Id)
            {
                return BadRequest();
            }

            _context.Entry(course).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Course
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Course>> PostCourse(Course course)
        {
            if (_context.Courses == null)
            {
                return Problem("Entity set 'CourseContext.Courses'  is null.");
            }
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourse", new { id = course.Id }, course);
        }

        // DELETE: api/Course/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            if (_context.Courses == null)
            {
                return NotFound();
            }
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CourseExists(int id)
        {
            return (_context.Courses?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
