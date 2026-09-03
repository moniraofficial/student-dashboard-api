import app from './app';
import dotenv from 'dotenv';
import pool from './config/database';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Test Database Connection and Start Server
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database time:', res.rows[0].now);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
});