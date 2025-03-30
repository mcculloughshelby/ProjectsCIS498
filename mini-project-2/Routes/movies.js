import express from 'express';
import pool from '../database.js';

const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM movies');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("All movies can not be retrieved.");
        alert("All movies can not be retrieved. Please try again later. Thank you");
    }
});

// Get a movie by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send("Movie not found.");
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send("Specific movie can not be found.");
        alert("The specific movie can not be found. Please try again later. Thank you.");
    }
});

// Delete a movie by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM movies WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send("Movie not found.");
        }
        res.send("Movie deleted successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Movie can not be deleted.");
        alert("This movie can not be deleted. Please try again later. Thank you.");
    }
});
// Create a new movie   
router.post('/', async (req, res) => {
    const { title, genre, release_year } = req.body;
    try {
        await pool.query(
            'INSERT INTO movies (title, genre, release_year) VALUES ($1, $2, $3)',
            [title, genre, release_year]
        );
        res.send("Movie added successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Movie can not be added.");
        alert("This movie can not be added. Please try again later. Thank you.");
    }
});

export default router;
