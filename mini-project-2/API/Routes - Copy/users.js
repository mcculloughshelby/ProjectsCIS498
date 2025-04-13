import express from 'express';
import pool from '../database.js';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("All users can not be retrieved.");
        alert("All users can not be retrieved. Please try again later. Thank you");
    }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send("User not found.");
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send("Specfic user can not be retrieved.");
        alert("Specifc user can not be retrieved. Please try again later. Thank you.");
    }
});

//Delete a user by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send("User not found.");
        }
        res.send("User deleted successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("User can not be deleted.");
        alert("User can not be deleted. Please try again later. Thank you.");
    }
});
//Create a new user  (Because i got bored and throught about it from the classwork)
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
            [name, email, password]
        );
        res.send("User added successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("User can not be added.");
        alert("User can not be added. Please try again later. Thank you.");
    }
});


export default router;
