```markdown
# Architectural Thinking & Design Decisions

## 1. Tech Stack Selection
- **Node.js & Express:** Chosen for its lightweight, fast execution and rich ecosystem, making it ideal for building scalable REST APIs.
- **TypeScript:** Integrated to bring strict static typing, minimizing runtime errors and improving code maintainability and developer experience.
- **PostgreSQL:** Selected for its robust relational data integrity, reliability, and seamless integration with complex queries using the `pg` package.

## 2. Project Architecture & Folder Structure
The project follows a modular, separation-of-concerns pattern:
- `src/controllers/`: Contains core business logic for handling requests and interacting with the database.
- `src/routes/`: Separates endpoint routing from business logic.
- `src/middlewares/`: Handles cross-cutting concerns like JWT verification and global error catching.
- `src/config/`: Centralizes database pool configuration.

## 3. Security & Error Handling
- **Authentication:** Passwords are securely hashed using `bcryptjs`, and stateless session management is handled via JSON Web Tokens (JWT).
- **Error Management:** A centralized global error handling middleware ensures that all unexpected runtime errors are caught gracefully, returning consistent error formats (`success: false, message: ...`) to the client.