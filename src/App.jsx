import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<WeatherDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

