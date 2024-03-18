import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    const apiKey = '7623a523d7a1aa2bbac53ef35ed6fd5f'; 
    const city = 'Berlin'; // Normal space, no need for manual encoding
    const encodedCity = encodeURIComponent(city); // Automatically encodes spaces and other characters
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&units=metric&appid=${apiKey}`;

    axios.get(url)
      .then(response => {
        const temp = response.data.main.temp;
        setWeather(`${city}: ${temp}°C`);
      })
      .catch(error => {
        console.error("Error fetching weather: ", error);
        setWeather("Failed to load weather.");
      });
  }, []);

  return <div>{weather}</div>;
}

export default Weather;
