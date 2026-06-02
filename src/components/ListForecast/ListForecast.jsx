import { useEffect, useState } from "react";
import { fetchWeatherForecast } from "./ListForecastAPI";
import { ForecastListGrid } from "./ForecastListGrid";

import styles from "./ListForecast.module.css";
import cont from "../container.module.css";

export function ListForecast() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherForecast({ lat: latitude, lon: longitude })
            .then((dailyData) => setForecast(dailyData))
            .catch((err) => console.error(err));
        },
        (error) => {
          console.warn(
            "Геолокацію відхилено, завантажуємо дефолтне місто:",
            error.message,
          );
          fetchWeatherForecast()
            .then((dailyData) => setForecast(dailyData))
            .catch((err) => console.error(err));
        },
      );
    } else {
      fetchWeatherForecast()
        .then((dailyData) => setForecast(dailyData))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <section className={`${styles.wrapper} ${cont.container}`}>
      <h2 className={styles.title}>Weekly forecast</h2>

      <ForecastListGrid forecast={forecast} />
    </section>
  );
}
