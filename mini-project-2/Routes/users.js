import express from 'express';
import pool from '../database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
});

router.post('/', async (req, res) => {
    const { username, password, email } = req.body;
    await pool.query(
        'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)',
        [username, password, email]
    );
    res.send('User added successfully');
});

export default router;
