**Database Setup**

Create a local posgresql database with the following credentials:


User: postgres
Password: password
Database: courses_db_dotnet



**API Documentation**

### GET `/courses:competency`

* Gets all courses with the given competency
* Submit competency as query parameter

Example:

Get: `http://localhost:3000/courses?competency=Visual%20Thinking`

Response from server:

[
    {
        "course_name": "Free-Hand Representation for Architects"
    },
    {
        "course_name": "Building Finishes and Construction Details"
    },
    {
        "course_name": "Design Development and Construction Documents"
    },
    {
        "course_name": "Introduction of Interior Design - Design Studio"
    },
    {
        "course_name": "Digital Representation Tools for Architects"
    },
    {
        "course_name": "Architectural Design Studio I"
    },
    {
        "course_name": "Digital Design Studio and Workshop"
    },
    {
        "course_name": "Sustainability in Architectural Design"
    },
    {
        "course_name": "Advanced Architectural Computing"
    },
    {
        "course_name": "Internship in Technical Drawing and Design"
    },
    {
        "course_name": "Building Service Systems and Building Systems Integration"
    },
    {
        "course_name": "Architectural Design Studio"
    },
    {
        "course_name": "History and Philosophy of Modern and Contemporary Architecture"
    },
    {
        "course_name": "Foundations of 3-Dimensional Design"
    },
    {
        "course_name": "Introduction to Egyptian Architecture"
    }
]