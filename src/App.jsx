import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
function App() {
  const [weather, setWeather] = useState(null);//initial -> null(no data)
  const [error, setError] = useState("");//initial empty string
  const API_KEY = "a6b2b9d1db8e8227179e18bac5b86aa6";
  const getWeather = (city) => {
    if (!city.trim()) return;//prevent empty inputs and remove spaces
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == 200) {//checks req successful
          setWeather(data);//saves weather data
          setError("");//errors will be cleared
        } 
        else {//if the city is not found means it will reset the weather and it shows error
          setWeather(null);
          setError("City not found");
        }
      })
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white p-6 rounded-xl w-80">
        <h1 className="text-2xl font-bold text-center mb-4"> Weather App </h1>
        <SearchBar onSearch={getWeather} /> {/*getWeather to child comp*/}
        {error && ( //this will shows error
          <p className="text-red-500 text-center mt-2"> {error} </p>
        )}
        {weather && <WeatherCard weather={weather} />} {/*weather data shows*/}
      </div>
    </div>
  );
}
export default App;