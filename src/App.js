import React, { useState } from "react";
import axios from "axios";
import Weather from "./weather.js";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const API_KEY = "8ccaf7d7c26b4a721afc1eaa8a2276cf";
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather && <Weather data={weather} />}
    </div>
  );
};

export default App;
