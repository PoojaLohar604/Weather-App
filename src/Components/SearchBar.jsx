// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      setError(''); // Clear any previous error
      onSearch(city);
    } else {
      setError('Please enter a city name.');
    }
  };

  return (
    <div>
    <div className='input-search'>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    {error && <div className="search-error" style={{ fontSize:"20px",color: 'red', marginTop: '25px',textAlign:"right"}}>{error}</div>}
    </div>
  );
};

export default SearchBar;
