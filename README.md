# mern-todo-backend

# Task Management API

This is a RESTful API for a task management application built using Node.js, Express, and MongoDB. It provides endpoints to create, read, update, and delete tasks, allowing users to manage their to-do lists effectively.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Web framework for Node.js, used to build the API.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- **dotenv**: Module to load environment variables from a `.env` file.
- **Axios**: Promise-based HTTP client for the frontend (not directly in backend, but used for requests).

## Installation

Follow these steps to set up and run the backend API:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/dhruvi003/mern-todo-backend
   cd mern-todo-backend

2. **Install Dependencies**
   ```bash
   npm install

3. **Set Up Environment Variables**
   ```bash
   MONGODB_URI=mongodb://<username>:<password>@localhost:27017/<database>
   PORT=5000

4. **Start the Server**
   ```bash
   npm start

5. **Access the API**
       
