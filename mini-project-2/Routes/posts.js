import express from 'express';
import pool from '../database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
});

router.post('/', async (req, res) => {
    const { user_id, movie_id, content } = req.body;
    await pool.query(
        'INSERT INTO posts (user_id, movie_id, content) VALUES ($1, $2, $3)',
        [user_id, movie_id, content]
    );
    res.send('Post added successfully');
});

export default router;
