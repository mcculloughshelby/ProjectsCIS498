import express from 'express';
import pool from '../database.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
});
// Get all posts
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM posts');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("All posts can not be retrieved.");
        alert("All posts can not be retrieved. Please try again later. Thank you");
    }
});

//Get a post by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send("Post not found.");
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send("Specific post can not be retrieved.");
        alert("The specific post can not be retrieved. Please try again later. Thank you.");
    }
});

//delete a post by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM posts WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send("Post not found.");
        }
        res.send("Post deleted successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Post can not be deleted.");
        alert("This post can not be deleted. Please try again later. Thank you.");
    }
});


//create a new post
router.post('/', async (req, res) => {
    const { user_id, movie_id, content } = req.body;
    await pool.query(
        'INSERT INTO posts (user_id, movie_id, content) VALUES ($1, $2, $3)',
        [user_id, movie_id, content]
    );
    res.send('Post added successfully');
});

export default router;
