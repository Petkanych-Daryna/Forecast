import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { fetchWeather, fetchFavoriteCities } from "./redux/operations";
import {
  getWeather,
  getForecast,
  getIsLoading,
  getError,
} from "./redux/selectors";

import { MainWeather } from "./components/MainWeather/MainWeather";
import { ChartForecast } from "./components/ChartForecast/ChartForecast";
import { WeatherCard } from "./components/MainWeather/WeatherCard";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { ListForecast } from "./components/ListForecast/ListForecast";
import { InfoAboutPets } from "./components/InfoAboutPets/InfoAboutPets";
import { NatureSlider } from "./components/Nature/NatureSlider";

export default function App() {
  const dispatch = useDispatch();
  
  const weather = useSelector(getWeather);
  const forecast = useSelector(getForecast);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchFavoriteCities());

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos?.coords?.latitude;
          const lon = pos?.coords?.longitude;

          if (typeof lat === "number" && typeof lon === "number") {
            dispatch(fetchWeather({ lat, lon }));
          } else {
            dispatch(fetchWeather("Kyiv"));
          }
        },
        () => dispatch(fetchWeather("Kyiv")),
      );
    } else {
      dispatch(fetchWeather("Kyiv"));
    }
  }, [dispatch]);
  
  const handleSearch = (city) => {
    if (city.trim()) dispatch(fetchWeather(city));
  };
  
  return (
    <div className="app">
      <Header />
      <Hero onSearch={handleSearch} />

      {isLoading && <p style={{ textAlign: "center" }}>Завантаження...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {weather && (
        <MainWeather
          weather={weather}
          onSeeMore={() => setShow(!show)}
          isOpen={show}
        />
      )}

      {show && (
        <div className="details-section">
          {weather && <WeatherCard weather={weather} />}
          <ChartForecast forecast={forecast} />
          <ListForecast />
        </div>
      )}

      <InfoAboutPets />
      <NatureSlider />
      <Footer />
    </div>
  );
}
