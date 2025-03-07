import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [userLocation, setUserLocation] = useState('');

  useEffect(() => {
    // Get user's location from the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=e14698ee9b847e6944a2b35504c54cb2&units=metric`);
          setUserLocation(response.data.name);
          setLocation(`${response.data.name}`);
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      });
    }
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e14698ee9b847e6944a2b35504c54cb2&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <div className="bg-gray-100 flex flex-col items-center">
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-green-700">Weather Forecast</h2>
          <p className="text-lg mb-6 text-center text-green-800">Current Location: {userLocation}</p>
          <div className="flex justify-center mb-6">
            <input
              type="text"
              value={location}
              onChange={handleInputChange}
              placeholder="Enter location"
              className="p-2 rounded-l-lg border border-green-300 focus:ring-2 focus:ring-green-400 text-black"
            />
            <button
              onClick={handleSearch}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r-lg transition-all duration-300"
            >
              Search
            </button>
          </div>
          {weatherData && (
            <div className="bg-white rounded-lg p-6 shadow-lg border border-green-200">
              <h3 className="text-2xl font-bold mb-2 text-green-700">Weather for {weatherData.name}</h3>
              <p className="text-lg text-green-800">Temperature: {weatherData.main.temp}°C</p>
              <p className="text-lg text-green-800">Humidity: {weatherData.main.humidity}%</p>
              <p className="text-lg text-green-800">Wind Speed: {weatherData.wind.speed} m/s</p>
              <p className="text-lg text-green-800">Pressure: {weatherData.main.pressure} hPa</p>
              <p className="text-lg text-green-800">Visibility: {weatherData.visibility / 1000} km</p>
              <p className="text-lg text-green-800">Description: {weatherData.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
