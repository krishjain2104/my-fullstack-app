# My Fullstack App

This project is a fullstack web application that demonstrates user authentication and role-based data access using a Node.js/Express backend with a MySQL database and a React frontend. The application allows users to log in with their credentials (with the password being MD5-hashed on the client) and then view data retrieved from the MySQL table. Admin users have access to all records, while basic users only see their own record.
The project is divided into two main parts: `backend` and `frontend`.
## Project Overview

- **Backend:**  
  The server is built with Node.js and Express. It connects to a MySQL database, verifies user credentials (using MD5-hashed passwords), and issues a JSON Web Token (JWT) for authentication. Depending on the user's role (admin or basic), the API returns either all records or only the user's own record.

- **Frontend:**  
  The client is built with React. It provides a login form that MD5-hashes the password before sending it to the backend. After login, the React app uses the returned JWT to fetch and display user data from the server.
