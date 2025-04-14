// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = ({ user }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios.get('/api/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.error('Fetch failed:', err));
  }, []);

  const handleHover = (movie) => setSelectedMovie(movie);

  return (
    <div className="home-container" style={{ display: 'flex', gap: '2rem' }}>
      <div className="movie-list" style={{ flex: 1 }}>
        {movies.map(movie => (
          <div key={movie._id} onMouseEnter={() => handleHover(movie)}>
            {movie.title}
          </div>
        ))}
        {user?.role === 'admin' && (
          <div>
            <button>Add Movie</button>
            {/* update/delete buttons can be inside movie listing */}
          </div>
        )}
      </div>
      <div className="movie-details" style={{ flex: 2 }}>
        {selectedMovie ? (
          <div>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
            <p>{selectedMovie.genre}</p>
            <p>Released: {selectedMovie.releaseYear}</p>
          </div>
        ) : (
          <p>Hover over a movie to see details</p>
        )}
      </div>
    </div>
  );
};

export default Home;
