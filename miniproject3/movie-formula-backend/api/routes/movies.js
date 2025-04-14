import express from 'express';
import db from '../db.js';

const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM movies');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Error fetching movies");
  }
});

// Add a movie
router.post('/', async (req, res) => {
  const { title, description, genre, release_year } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO movies (title, description, genre, release_year) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, genre, release_year]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send("Error adding movie");
  }
});

// Update a movie
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, genre, release_year } = req.body;
  try {
    const result = await db.query(
      'UPDATE movies SET title=$1, description=$2, genre=$3, release_year=$4 WHERE id=$5 RETURNING *',
      [title, description, genre, release_year, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send("Error updating movie");
  }
});

// Delete a movie
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM movies WHERE id=$1', [req.params.id]);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send("Error deleting movie");
  }
});

export default router;
