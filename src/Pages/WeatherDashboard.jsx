// src/pages/WeatherDashboard.js
import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import CurrentWeather from '../Components/CurrentWeather';
import Forecast from '../Components/Forecast';
import UnitToggle from '../Components/UnitToggle';
import { useWeather } from '../Hooks/useWeather';

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('metric');
  const { currentWeather, forecast, loading, error } = useWeather(city, units);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  const handleToggleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <UnitToggle units={units} onToggle={handleToggleUnits} />
      {loading && <p style={{color:"#FFFFFF" , fontSize:"18px",fontWeight:"800"}}>Loading...</p>}
      {error && <p  style={{color:"#FFFFFF" , fontSize:"18px",fontWeight:"800"}}>{error}</p>}
      {city && (
        <>
        <div className='both'>
        {currentWeather && <CurrentWeather weather={currentWeather} />}
        {forecast && <Forecast forecast={forecast} />}</div>
         
        </>
      )}
    </div>
  );
};

export default WeatherDashboard;
