# Overview

This app was created as a demo database and query tool for course syllabi and the skills associated each course, as a tool intended for undergraduate students.

The backend imports all of the data contained in the `arch.csv` file into a local database, and provides an API endpoint for the frontend to access.

The frontend allows for either simulating the process of analyzing a syllabus or for querying courses based on the skills they develop.

# Instructions

The backend contains the necessary database migrations, but requires the creation of a local postgresql database in order to perform the migrations upon it, with the following credentials:

User: `postgres`
Password: `password`
Database: `courses_db`
Host: `127.0.0.1`
