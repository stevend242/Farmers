"use client"

import React, { useState } from 'react';
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert"
import { askAi } from '~/server/action/actions';
import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';

export default function AgroClimateAdvisor() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [cropAdvice, setCropAdvice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`);
      const geoData = await geoResponse.json();

      if (geoData.length === 0) {
        throw new Error('Location not found');
      }

      const { lat, lon } = geoData[0];

      const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`);
      const weatherData = await weatherResponse.json();

      if (weatherResponse.ok) {
        setWeather(weatherData);
        getCropAdvice(weatherData, geoData[0].display_name);
      } else {
        setError('Failed to fetch weather data. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while fetching weather data.');
    } finally {
      setLoading(false);
    }
  };

  const getCropAdvice = async (weatherData, locationName) => {
    try {
      const currentWeather = weatherData.current;
      const dailyForecast = weatherData.daily;

      const weatherDescription = getWeatherDescription(currentWeather.weather_code);

      const prompt = `Based on the following weather conditions in ${locationName}:
        Current conditions:
        - Temperature: ${currentWeather.temperature_2m}°C
        - Humidity: ${currentWeather.relative_humidity_2m}%
        - Weather: ${weatherDescription}
        - Wind speed: ${currentWeather.wind_speed_10m} m/s

        Today's forecast:
        - Max temperature: ${dailyForecast.temperature_2m_max[0]}°C
        - Min temperature: ${dailyForecast.temperature_2m_min[0]}°C
        - Precipitation probability: ${dailyForecast.precipitation_probability_max[0]}%
        What crops would be suitable to grow in this area? Please provide a brief explanation and any additional relevant information for farming, including long-term considerations based on the climate. Don't use markdown .  your provided response should not be in markdown format. `;
      const data = await askAi(prompt);
      setCropAdvice(data);
    } catch (err) {
      setError('An error occurred while fetching crop advice.');
    }
  };

  const getWeatherDescription = (code) => {
    const weatherCodes = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Fog',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      71: 'Slight snow fall',
      73: 'Moderate snow fall',
      75: 'Heavy snow fall',
      95: 'Thunderstorm',
    };
    return weatherCodes[code] || 'Unknown';
  };

  return (
    <div className="container mx-auto p-4 flex flex-col  gap-6 min-h-screen ">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="bg-blue-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">AgroClimate Advisor</CardTitle>
          <CardDescription className="text-blue-100">Get AI-powered crop recommendations based on local weather conditions.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex space-x-2 mb-4">
            <Input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-grow"
            />
            <Button
              onClick={getWeather}
              disabled={loading}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              {loading ? 'Loading...' : 'Get Advice'}
            </Button>
          </div>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {weather && (
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-blue-700">Current Weather in {location}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Thermometer className="w-6 h-6 mr-2 text-red-500" />
                  <span>{weather.current.temperature_2m}°C</span>
                </div>
                <div className="flex items-center">
                  <Droplets className="w-6 h-6 mr-2 text-blue-500" />
                  <span>{weather.current.relative_humidity_2m}%</span>
                </div>
                <div className="flex items-center">
                  <Cloud className="w-6 h-6 mr-2 text-gray-500" />
                  <span>{getWeatherDescription(weather.current.weather_code)}</span>
                </div>
                <div className="flex items-center">
                  <Wind className="w-6 h-6 mr-2 text-teal-500" />
                  <span>{weather.current.wind_speed_10m} m/s</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mt-4">Today's Forecast</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>Max Temp: {weather.daily.temperature_2m_max[0]}°C</div>
                <div>Min Temp: {weather.daily.temperature_2m_min[0]}°C</div>
                <div className="col-span-2">Precipitation: {weather.daily.precipitation_probability_max[0]}%</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {cropAdvice && (
        <Card className="w-full  mx-auto shadow-lg">
          <CardHeader className="bg-green-500 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold">Crop Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 whitespace-pre-wrap">{cropAdvice}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
