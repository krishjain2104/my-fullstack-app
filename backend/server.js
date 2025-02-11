// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Server is running!');
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
