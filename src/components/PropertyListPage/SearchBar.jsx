import React, { useState } from 'react';
import images from '../assets/images';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <form id="SearchBar_1" onSubmit={handleSubmit} className="flex gap-2">
      <input
        id="SearchBar_2"
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        id="SearchBar_3"
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;