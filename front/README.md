# Project Setup

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
   API_URL=https://your-api-url.com
   ```

3. **Run the Project**  
   Start the development server with the following command:
   ```bash
   npm run dev
   ```

4. **Access the Project**  
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Scripts

- `npm run dev`: Starts the development server.
- `npm install`: Installs all project dependencies.

## Environment Variables

Ensure your `.env` file contains all required variables as specified in `.env.example`.

---

## Project Details

- **Port**: The default port for the project is `3000`. If you encounter any issues, ensure that this port is not being used by another application.
- **API URL**: Configure the `API_URL` variable in `.env` to point to your API.

---

## Troubleshooting

- If you encounter issues with dependencies, try deleting the `node_modules` folder and reinstalling:
  ```bash
  rm -rf node_modules
  npm install
  ```

- For issues related to environment variables, double-check your `.env` file and compare it with `.env.example`.

---