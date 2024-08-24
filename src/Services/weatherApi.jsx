import axios from 'axios';

// API key for accessing the OpenWeatherMap service
const API_KEY = 'b790a376872cf03ec2840365311c122d'; 

// Base URL for OpenWeatherMap API
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Function to fetch the current weather data for a given city
// 'units' parameter is optional and defaults to 'metric' (Celsius)
export const getCurrentWeather = (city, units = 'metric') => {
  return axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,        // City name
      units,          // Units (metric, imperial, etc.)
      appid: API_KEY, // API key for authentication
    },
  });
};

// Function to fetch the 5-day weather forecast for a given city
// 'units' parameter is optional and defaults to 'metric' (Celsius)
export const getForecast = (city, units = 'metric') => {
  return axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,        // City name
      units,          // Units (metric, imperial, etc.)
      appid: API_KEY, // API key for authentication
    },
  });
};
