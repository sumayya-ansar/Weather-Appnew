import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Weather.css";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import humidity_icon from "../assets/humidity.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const WeatherDetails = () => {
  const { city } = useParams(); 
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState(null);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "11d": rain_icon,
    "11n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
    "50d": snow_icon,
    "50n": snow_icon,
  };

  const fetchWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        navigate("/"); 
        return;
      }

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: allIcons[data.weather[0].icon] || clear_icon,
      });
    } catch (error) {
      console.error("Error fetching weather data");
      navigate("/");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="weather">
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="Weather Icon" className="weather-icon" />
          <p className="temperature">{weatherData.temperature}&deg;C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} className="img" alt="Humidity" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} className="img" alt="Wind Speed" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
          <button  className="btn"onClick={() => navigate("/")}>Go Back</button>
        </>
      ) : (
        <p className="loading-text">Loading...</p>
      )}
    </div>
  );
};

export default WeatherDetails;

