import React from "react";
function WeatherCard({ weather }) {//weather data -> props
  return (
    <div className="mt-4 space-y-2">
      <p>🌡 Temp : {weather.main.temp} °C </p>
      <p>💧 Humidity : {weather.main.humidity} % </p>
    </div>
  );
}
export default WeatherCard;