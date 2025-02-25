// Home Page with Movie Posters from public/Posters Directory
// Two-Column Layout with Hover Effects for Movie Details
// Tailwind CSS for Consistent Spacing and Modern Design

import React, { useState } from 'react';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    {
      id: 1,
      title: 'Fast & Furious',
      description: 'The movie that started it all.',
      image: '/Posters/the-fast-and-the-furious.jpeg'
    },
    {
      id: 2,
      title: '2 Fast 2 Furious',
      description: 'High-speed action in Miami.',
      image: '/Posters/2-fast-2-furious.jpeg'
    },
    {
      id: 3,
      title: 'Top Gun',
      description: 'A classic aviation action movie.',
      image: '/Posters/top-gun.jpeg'
    },
    {
      id: 4,
      title: 'Top Gun: Maverick',
      description: 'The legend returns to the skies.',
      image: '/Posters/top-gun-maverick.jpeg'
    },
  ];

  return (
    <div className="pt-24 pb-10 bg-gray-900 text-white min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="col-span-1">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Movie List</h2>
        <ul className="space-y-6">
          {items.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() => setSelectedItem(item)}
              className="cursor-pointer bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover rounded-md mb-2"
              />
              <h3 className="text-2xl font-bold text-yellow-500">{item.title}</h3>
              <br />
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-1">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Details</h2>
        {selectedItem ? (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">{selectedItem.title}</h3>
            <p className="text-gray-300">{selectedItem.description}</p>
            <br />
          </div>
        ) : (
          <p className="text-gray-500">Hover over a movie to see details.</p>
        )}
      </div>
    </div>
  );
};

export default Home;




