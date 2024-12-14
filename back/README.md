# NestJS Project Setup

## Prerequisites
Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (recommended version: LTS)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation Steps

1. **Install Dependencies**  
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

2. **Create the `.env` File**  
   Create a `.env` file in the root directory of the project. Use `.env.example` as a reference for the required environment variables.  
   Example:
   ```
   PORT=8080
   ```

3. **Run the Project**  
   Start the NestJS application with the following command:
   ```bash
   npm run start:dev
   ```

4. **Access the Project**  
   Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

---

## Scripts

- `npm run start`: Starts the application in production mode.
- `npm run start:dev`: Starts the application in development mode with hot-reloading.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the codebase.
- `npm run test`: Runs the test suite.

## Environment Variables

Ensure your `.env` file contains all required variables as specified in `.env.example`.

---

## Project Details

- **Port**: The default port for the project is `3000`. If you encounter any issues, ensure that this port is not being used by another application.
- **Database URL**: Configure the `DATABASE_URL` variable in `.env` to point to your database.

---

## Troubleshooting

- If you encounter issues with dependencies, try deleting the `node_modules` folder and reinstalling:
  ```bash
  rm -rf node_modules
  npm install
  ```