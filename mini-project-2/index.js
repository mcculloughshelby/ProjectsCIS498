import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Router } from 'express';
import Routes from 'express';

import movies from './routes/movies.js';
import users from './routes/users.js';
import posts from './routes/posts.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes for movies, users, and posts
app.use('/movies', movies);
app.use('/users', users);   
app.use('/posts', posts);

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
