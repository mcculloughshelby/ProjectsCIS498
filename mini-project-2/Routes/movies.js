import express from 'express';
import pool from '../database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM movies');
    res.json(result.rows);
});

router.post('/', async (req, res) => {
    const { title, description, genre, release_year } = req.body;
    await pool.query(
        'INSERT INTO movies (title, description, genre, release_year) VALUES ($1, $2, $3, $4)',
        [title, description, genre, release_year]
    );
    res.send('Movie added successfully');
});

export default router;
