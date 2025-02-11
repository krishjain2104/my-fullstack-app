const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

exports.loginUser = (req, res) => {
  const { userID, password } = req.body;
  if (!userID || !password) {
    return res.status(400).json({ error: 'UserID and password required.' });
  }
  const query = 'SELECT userid, password_hash, role FROM users WHERE userid = ? AND password_hash = ?';
  db.query(query, [userID, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error.' });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
    const user = results[0];
    // Create a JWT token with user info (expires in 1 hour)
    const token = jwt.sign({ userid: user.userid, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, role: user.role });
  });
};
