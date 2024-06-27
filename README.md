Develop a task management application (NEXTask) with a user system, CRUD operations, and a MongoDB database.


## Concurrent Backend and Frontend Setup

Clone and Navigate:
Clone your repository and navigate to the project directory.

Install Dependencies:
Use npm or yarn to install both backend and frontend dependencies.

Run Concurrently:
Start backend and frontend servers together with npm run dev.



## Backend 
### Backend Folder and File Structure

**Folders:**

- **Src/Routes**: Definition of endpoints or routes that the Frontend can request.
- **Src/Controllers**: Functions that execute when visiting a URL.
- **Src/Models**: Database models, where schemas are created.
- **Src/Middlewares**: Functions to protect routes, especially for authenticated users.
- **Src/Schemas**: Schemas for data validation.
- **Src/Libs**: Reusable code that can be imported multiple times.

**Files:**

- **App.js**: Backend Express configuration.
- **Db.js**: Database configuration.
- **Config.js**: Configuration file for importing settings into other files.
- **Index.js**: Application entry point.
- **./Models/User.model.js**: Specification of the data to be saved in MongoDB.
- **./Routes/Auth.routes.js**: Routes related to authentication.
- **./Controllers/Auth.controller.js**: Functions related to authentication.
- **./Libs/Jwt.js**: Generates a JSON Web Token.
- **./Middlewares/ValidateToken.js**: Function to validate if the user is authenticated.
- **./Controllers/Tasks.controllers.js**: Functions to handle tasks.
- **./Models/Task.model.js**: Model for tasks.
- **./Schemas/Auth.schemas.js**: Schema for authentication.
- **./Middlewares/ValidatorMiddleware.js**: Middleware to validate with schemas.
- **./Schemas/Task.schema.js**: Schema for tasks.

### Important Notes

1. When importing files that we create, we must include the extension (.js).
2. To avoid mixing Frontend and Backend routes, add '/api' to the Backend routes in App.js.
3. Middlewares are functions that run before reaching a route.

### Modules Used

- **Nodemon**: Automates server restarts during development.
- **Morgan**: Logs incoming requests to the backend in the console.
- **Mongoose**: Connects and models data in MongoDB.
- **Dotenv**: Imports environment variables from a .env file.
- **Bcryptjs**: Encrypts passwords.
- **JsonWebToken**: Creates session tokens.
- **Cookie-parser**: Converts cookies to JSON objects.
- **Zod**: Validates data against a schema.
- **Cors**: Easily configures CORS.

## Frontend
### Important Notes

1. To avoid CORS errors, install a module on the backend.

### Modules Used

- **React-router-dom**: Creates and manages routes.
- **React-hook-form**: Validates form data and manages state changes.
- **Axios**: Library for making HTTP requests.
- **Js-cookie**: Reads cookies.
- **Dayjs**: Manipulates dates in various formats.

### Files

- **./Src/Api/auth.js**: Makes backend requests related to authentication.
- **./Src/Context/AuthContext.jsx**: Context to store user authentication data.
- **./Src/Api/axios.js**: Axios configuration file.
- **./Src/Api/tasks.js**: Makes backend requests related to tasks.
