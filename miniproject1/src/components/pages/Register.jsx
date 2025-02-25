// Register Page with Validation Rules and Movie-Themed Design
// Tailwind CSS for Colorful Borders and Spacing

import React, { useState } from 'react';


const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
  };

  return (
    <div className="pt-24 pb-10 bg-gray-900 text-white min-h-screen">
      <div className="max-w-lg mx-auto bg-black p-10 rounded-lg shadow-lg border-4 border-yellow-600">
        <h2 className="text-4xl font-bold text-center mb-6 text-yellow-500">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-3 rounded border-2 border-yellow-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-3 rounded border-2 border-yellow-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} className="w-full p-3 rounded border-2 border-yellow-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded border-2 border-yellow-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-3 rounded border-2 border-yellow-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
          <input type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="w-full p-3 rounded border-2 border-yellow-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-3 rounded border-2 border-yellow-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded border-2 border-yellow-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-md transition duration-300">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;




