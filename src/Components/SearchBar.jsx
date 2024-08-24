// src/components/SearchBar.js
import React, { useState } from 'react';

// SearchBar component allows users to input a city name and trigger a search
const SearchBar = ({ onSearch }) => {
  // State to hold the city input by the user
  const [city, setCity] = useState('');
  
  // State to hold any error message if input is invalid
  const [error, setError] = useState('');

  // Function to handle the search when the button is clicked
  const handleSearch = () => {
    if (city.trim()) {
      // If input is not empty, clear any previous error and trigger the search
      setError('');
      onSearch(city);
    } else {
      // If input is empty, show an error message
      setError('Please enter a city name.');
    }
  };

  return (
    <div>
      {/* Search input and button layout */}
      <div className="input-search">
        {/* Input field for entering city name */}
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state on input change
        />
        
        {/* Search button */}
        <button onClick={handleSearch}>Search</button>
      </div>
      
      {/* Display error message if there is one */}
      {error && (
        <div
          className="search-error"
          style={{ fontSize: "20px", color: 'red', marginTop: '25px', textAlign: "right" }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
