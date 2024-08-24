import { useState, useEffect } from 'react';
import { getCurrentWeather, getForecast } from '../Services/weatherApi';

// Custom hook to fetch and manage weather data
export const useWeather = (city, units) => {
  // State to store the current weather data
  const [currentWeather, setCurrentWeather] = useState(null);

  // State to store the 5-day forecast data
  const [forecast, setForecast] = useState(null);

  // State to manage the loading state while fetching data
  const [loading, setLoading] = useState(false);

  // State to handle any errors during the data fetch
  const [error, setError] = useState(null);

  // useEffect runs whenever the city or units change
  useEffect(() => {
    if (!city) {
      // If no city is provided, reset weather data and do not make an API call
      setCurrentWeather(null);
      setForecast(null);
      return;
    }

    // Function to fetch weather data
    const fetchWeather = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data

        // Fetch current weather data
        const weatherData = await getCurrentWeather(city, units);
        // Fetch forecast data
        const forecastData = await getForecast(city, units);

        // Update state with fetched data
        setCurrentWeather(weatherData.data);
        setForecast(forecastData.data);
      } catch (err) {
        // Set error message if there is an issue with the fetch
        setError('Unable to fetch weather data. Please check the city name.');
      } finally {
        // Set loading to false after the fetch is complete
        setLoading(false);
      }
    };

    // Call the fetchWeather function
    fetchWeather();
  }, [city, units]); // Dependencies: re-run effect when city or units change

  // Return the current weather data, forecast data, loading state, and error state
  return { currentWeather, forecast, loading, error };
};
