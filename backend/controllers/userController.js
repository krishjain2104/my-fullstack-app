const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

exports.getUsers = (req, res) => {
  const { userid, role } = req.user;
  if (role === 'admin') {
    // Return all user rows for admins
    db.query('SELECT userid, password_hash, role FROM users', (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error.' });
      }
      res.json(results);
    });
  } else {
    db.query('SELECT userid, password_hash, role FROM users WHERE userid = ?', [userid], (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error.' });
      }
      res.json(results);
    });
  }
};
