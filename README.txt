My Fullstack App

This project is a fullstack web application that demonstrates user authentication and role-based data access using a Node.js/Express backend with a MySQL database and a React frontend. The application allows users to log in with their credentials (with the password being MD5-hashed on the client) and then view data retrieved from the MySQL table. Admin users have access to all records, while basic users only see their own record.

Project Overview:
Backend:
The server is built with Node.js and Express. It connects to a MySQL database, verifies user credentials (using MD5-hashed passwords), and issues a JSON Web Token (JWT) for authentication. Depending on the user's role (admin or basic), the API returns either all records or only the user's own record.

Frontend:
The client is built with React. It provides a login form that MD5-hashes the password before sending it to the backend. After login, the React app uses the returned JWT to fetch and display user data from the server.

Folder Structure:
my-fullstack-app/
  backend/              # Node.js/Express server code
    controllers/      # Contains authController.js and userController.js
    middleware/       # Contains authMiddleware.js
    routes/           # Contains authRoutes.js and userRoutes.js
    .env              # Environment variables (not committed to Git)
    server.js         # Main server file
    package.json
  frontend/             # React client code
    public/
      index.html
    src/
      components/
        Login.js
        Dashboard.js
      App.js
      index.js
      index.css      (optional global styles)
    package.json
    yarn.lock
README.md             # This file

Installation and Setup:

Backend Setup:
1. Clone the repository:
   git clone https://github.com/krishjain2104/OCS-Assignment.git
   cd OCS-Assignment/backend
2. Install Dependencies:
   npm install
3. Configure Environment Variables:
   Create a .env file in the backend folder with the following content (update values as necessary):
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=1234
   DB_NAME=my_database
   JWT_SECRET=your_generated_secret_key
4. Start the Backend Server:
   node server.js
   The server should run on http://localhost:5000

Frontend Setup:
1. Navigate to the frontend folder:
   cd ../frontend
2. Install Dependencies:
   yarn install (or npm install)
3. Update API Endpoints (if needed):
   Ensure that any API calls in your React code (e.g., in Login.js and Dashboard.js) are pointing to http://localhost:5000.
4. Start the Frontend Development Server:
   yarn start (or npm start)
   Your React app should open in your browser at http://localhost:3000

Usage:
1. Login:
   Open the login page at http://localhost:3000/login.
   Enter your userID and password. The password is MD5-hashed on the client side before being sent to the backend.
   On successful login, a JWT token is stored locally and the app redirects you to the dashboard.
2. Dashboard:
   The dashboard fetches user data from the backend using the JWT token.
   If you are an admin, you will see all records from the database.
   If you are a basic user, you will only see your own record.

Notes on Security:
- The frontend code does not include any sensitive information such as your JWT secret or database credentials.
- The raw password is never sent to the server; only its MD5 hash is transmitted.
- All sensitive operations (authentication, data access) are handled on the server side.
- Ensure that your .env file is not committed to your repository by including it in your .gitignore.

License:
This project is not licensed.
