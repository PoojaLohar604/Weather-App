// src/components/CurrentWeather.js
import React from "react";

// Component that displays the current weather information
const CurrentWeather = ({ weather }) => {
  // If weather data is not available, return null (do not render anything)
  if (!weather) return null;

  // Destructure relevant properties from the weather data
  const { temp, temp_min, temp_max, humidity } = weather.main;
  const { speed, deg } = weather.wind;
  const { description, icon } = weather.weather[0];

  return (
    <div className="weather-details">
      <h2>Current Weather</h2>
      <div className="main-details">
        {/* Display current temperature */}
        <p>Temperature: {temp}°</p>

        {/* Display minimum and maximum temperatures */}
        <p>
          Min: {temp_min}° Max: {temp_max}°
        </p>

        {/* Display humidity level */}
        <p>Humidity: {humidity}%</p>

        {/* Display wind speed and direction */}
        <p>
          Wind: {speed} m/s, {deg}°
        </p>

        {/* Display weather description */}
        <p>{description}</p>

        {/* Display weather icon */}
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
          style={{ width: "50px" }}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
