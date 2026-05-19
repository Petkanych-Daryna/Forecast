import { useEffect, useState } from "react";
import "./App.css";

import {
  WeatherApi,
  ForecastApi,
  WeatherByCityApi,
  ForecastByCityApi,
} from "./components/MainWeather/WeatherApi";
import { MainWeather } from "./components/MainWeather/MainWeather";
import { ChartForecast } from "./components/ChartForecast/ChartForecast";
import { WeatherCard } from "./components/MainWeather/WeatherCard";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { ListForecast } from "./components/ListForecast/ListForecast";
import { InfoAboutPets } from "./components/InfoAboutPets/InfoAboutPets";
import { NatureSlider } from "./components/Nature/NatureSlider";

function App() {
  const [data, setData] = useState({ weather: null, forecast: null });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lon } = pos.coords;
        Promise.all([WeatherApi(lat, lon), ForecastApi(lat, lon)])
          .then(([w, f]) => setData({ weather: w, forecast: f }))
          .catch((err) => console.error(err));
      },
      () => {
        Promise.all([WeatherApi(50.45, 30.52), ForecastApi(50.45, 30.52)])
          .then(([w, f]) => setData({ weather: w, forecast: f }))
          .catch((err) => console.error(err));
      },
    );
  }, []);

  const handleSearch = (city) => {
    if (!city.trim()) return;

    setError(null);

    Promise.all([WeatherByCityApi(city), ForecastByCityApi(city)])
      .then(([w, f]) => {
        setData({ weather: w, forecast: f });
      })
      .catch((err) => {
        console.error(err);
        setError("Місто не знайдено. Спробуйте ще раз.");
        alert("Місто не знайдено. Перевірте правильність написання.");
      });
  };

  if (!data.weather)
    return (
      <h1 className="loading" style={{ fontSize: "30px" }}>
        Завантаження...
      </h1>
    );

  return (
    <div className="app">
      <Header />

      <Hero onSearch={handleSearch} />

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <MainWeather
        weather={data.weather}
        onSeeMore={() => setShow(!show)}
        isOpen={show}
      />

      {show && (
        <div className="details-section">
          <WeatherCard weather={data.weather} />
          <ChartForecast forecast={data.forecast} />
          <ListForecast />
        </div>
      )}
      <InfoAboutPets />
      <NatureSlider />
      <Footer />
    </div>
  );
}

export default App;
