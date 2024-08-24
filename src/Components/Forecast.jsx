// src/components/Forecast.js
import React from 'react';

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  const forecastItems = forecast.list.slice(0, 5).map((item) => {
    const { dt_txt, main, weather } = item;
    const { temp } = main;
    const { description, icon } = weather[0];

    return (
      <div key={dt_txt}>
        <p>{new Date(dt_txt).toLocaleDateString()}</p>
        <p>Avg Temperature: {temp}°</p>
        <p>{description}</p>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} style={{width:"50px"}}/>
      </div>
    );
  });

  return (
    <div className='forcast-details'>   
      <h2>5 - Day Forecast</h2>
      <div className='forcast-main-details'> {forecastItems}</div>
     
    </div>
  );
};

export default Forecast;
