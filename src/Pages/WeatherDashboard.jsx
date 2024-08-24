import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import CurrentWeather from '../Components/CurrentWeather';
import Forecast from '../Components/Forecast';
import UnitToggle from '../Components/UnitToggle';
import { useWeather } from '../Hooks/useWeather';

const WeatherDashboard = () => {
  // State to store the selected city
  const [city, setCity] = useState('');
  
  // State to manage the units for temperature (metric for Celsius, imperial for Fahrenheit)
  const [units, setUnits] = useState('metric');
  
  // Custom hook to fetch weather data and manage loading and error states
  const { currentWeather, forecast, loading, error } = useWeather(city, units);

  // Function to update the city when the search is performed
  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  // Function to toggle between Celsius and Fahrenheit units
  const handleToggleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div>
      {/* SearchBar component to input and search for a city */}
      <SearchBar onSearch={handleSearch} />
      
      {/* UnitToggle component to switch between Celsius and Fahrenheit */}
      <UnitToggle units={units} onToggle={handleToggleUnits} />

      {/* Display loading message while data is being fetched */}
      {loading && <p style={{color:"#FFFFFF" , fontSize:"18px",fontWeight:"800"}}>Loading...</p>}
      
      {/* Display error message if there is an issue with the fetch */}
      {error && <p  style={{color:"#FFFFFF" , fontSize:"18px",fontWeight:"800"}}>{error}</p>}

      {/* Display weather details only if a city is selected */}
      {city && (
        <>
          <div className='both'>
            {/* Display current weather details */}
            {currentWeather && <CurrentWeather weather={currentWeather} />}
            
            {/* Display 5-day weather forecast */}
            {forecast && <Forecast forecast={forecast} />}
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherDashboard;
