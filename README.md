# Student Dashboard API

A robust and secure RESTful API built for a Student Dashboard utilizing Node.js, Express, TypeScript, and PostgreSQL.

## Features
- **Authentication:** JWT-based secure login (`POST /api/login`) with password hashing (`bcryptjs`).
- **Protected Routes:** Middleware to verify JWT tokens for secure data access.
- **Data Management:** Endpoints for Students, Courses, and Assignments.
- **Error Handling:** Centralized global error handler with consistent JSON responses.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL (with `pg` pool)
- **Security:** JSON Web Tokens (JWT), bcryptjs, CORS

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd student-dashboard-api