import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './api/db.js';
import movieRoutes from './api/routes/movies.js';
import userRoutes from './api/routes/users.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('🎬 Movie API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
