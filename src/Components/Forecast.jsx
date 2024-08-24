// src/components/Forecast.js
import React from 'react';

// Component that displays the 5-day weather forecast
const Forecast = ({ forecast }) => {
  // If forecast data is not available, return null (do not render anything)
  if (!forecast) return null;

  // Extract the first 5 forecast entries and map them to JSX elements
  const forecastItems = forecast.list.slice(0, 5).map((item) => {
    // Destructure relevant properties from each forecast entry
    const { dt_txt, main, weather } = item;
    const { temp } = main;
    const { description, icon } = weather[0];

    return (
      // Each forecast item is uniquely keyed by the date and time
      <div key={dt_txt}>
        {/* Display the date of the forecast */}
        <p>{new Date(dt_txt).toLocaleDateString()}</p>

        {/* Display the average temperature */}
        <p>Avg Temperature: {temp}°</p>

        {/* Display the weather description */}
        <p>{description}</p>

        {/* Display the weather icon */}
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
          style={{ width: "50px" }}
        />
      </div>
    );
  });

  return (
    <div className='forcast-details'>
      <h2>5 - Day Forecast</h2>
      {/* Display the list of forecast items */}
      <div className='forcast-main-details'>{forecastItems}</div>
    </div>
  );
};

export default Forecast;
