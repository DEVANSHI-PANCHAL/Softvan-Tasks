import "./App.css";
import { useState } from "react";

const api = {
  key: process.env.REACT_APP_KEY,
  base: process.env.REACT_APP_URL,
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

 
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {typeof weather.main !== "undefined" ? (
          <div>
            <p>{weather.name}</p>

            <p>{weather.main.temp}°C</p>

            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;