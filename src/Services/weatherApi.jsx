import axios from 'axios';

const API_KEY = 'b790a376872cf03ec2840365311c122d'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = (city, units = 'metric') => {
  return axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units,
      appid: API_KEY,
    },
  });
};

export const getForecast = (city, units = 'metric') => {
  return axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      units,
      appid: API_KEY,
    },
  });
};
