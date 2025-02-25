import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      alert('Please fill in both fields.');
      return;
    }
    if (username !== 'admin' || password !== 'password123') {
      alert('Incorrect username or password.');
      return;
    }
    setIsLoggedIn(true);
  };

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-4xl font-extrabold text-red-600">
            Movie Buff Forum
            <br></br>
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-lg hover:text-red-400 transition duration-300">Home</Link>
            <Link to="/register" className="text-lg hover:text-red-400 transition duration-300">Register</Link>
          </div>
          <div className="flex space-x-4 items-center">
            {isLoggedIn ? (
              <span className="text-green-500">Welcome, {username}!</span>
            ) : (
              <form onSubmit={handleSubmit} className="flex space-x-2 items-center">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-3 py-2 rounded bg-gray-800 text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 py-2 rounded bg-gray-800 text-white border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
                >
                  Login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;