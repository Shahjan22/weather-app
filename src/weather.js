import React from "react";

const Weather = ({ data }) => {
  return (
    <div className="weather">
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Humidity: {data.main.humidity} %</p>
      <p>Conditions: {data.weather[0].description}</p>
    </div>
  );
};

export default Weather;
