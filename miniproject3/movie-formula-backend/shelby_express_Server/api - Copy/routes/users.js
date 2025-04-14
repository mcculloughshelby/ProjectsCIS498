import express from 'express';
import db from '../db.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { firstName, lastName, id, email, city, zip, username, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const result = await db.query(`
      INSERT INTO users (first_name, last_name, id_num, email, city, zip, username, password)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      [firstName, lastName, id, email, city, zip, username, hashed]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send("Registration failed");
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);

  if (user.rows.length === 0) return res.status(401).send("Invalid user");

  const valid = await bcrypt.compare(password, user.rows[0].password);
  if (!valid) return res.status(401).send("Invalid password");

  res.json({ message: "Login successful", user: user.rows[0] });
});

export default router;
