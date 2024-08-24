// src/components/CurrentWeather.js
import React from "react";

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  const { temp, temp_min, temp_max, humidity } = weather.main;
  const { speed, deg } = weather.wind;
  const { description, icon } = weather.weather[0];

  return (
    <div className="weather-details">
      <h2>Current Weather</h2>
      <div className="main-details">
       
        <p>Temperature: {temp}°</p>
        <p>
          Min: {temp_min}° Max: {temp_max}°
        </p>
        <p>Humidity: {humidity}%</p>
        <p>
          Wind: {speed} m/s, {deg}°
        </p>
        <p>{description}</p>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
          style={{width:"50px"}}
        />
       
      </div>
    </div>
  );
};

export default CurrentWeather;
