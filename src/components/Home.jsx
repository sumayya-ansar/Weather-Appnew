import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import search_icon from "../assets/search.png";
import cloud_icon from "../assets/cloud.png";
import clear_icon from "../assets/clear.png";
import rain_icon from "../assets/rain.png";
import "./Weather.css";  

const Home = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSearch = () => {
    const city = inputRef.current.value.trim();
    if (!city) {
      alert("Please enter a city");
      return;
    }
    navigate(`/weather/${city}`);
  };

  return (
    <div className="weather">
      
      <h1 className="welcome-message"> Weather App</h1>
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Enter city..." />
        <img src={search_icon} alt="Search" onClick={handleSearch} />
      </div>
      <p className="welcome-subtext">Get real-time weather updates for any city</p>

      
      <div className="image-row">
      <img src={clear_icon} alt="Image 1" />
      <img src={rain_icon} alt="Image 2" />
      <img src={cloud_icon}alt="Image 3" />
    </div>
    </div>
  );
};

export default Home;


