import React from "react";
import styles from "./ListForecast.module.css";

export function ForecastCard({ item }) {
  const formattedDate = new Date(item.dt_txt).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className={styles.card}>
      <p className={styles.date}>{formattedDate}</p>

      <img
        className={styles.icon}
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt={item.weather[0].description}
      />

      <p className={styles.temp}>
        {Math.round(item.main.temp_max)}° {Math.round(item.main.temp_min)}°C
      </p>

      <p className={styles.desc}>{item.weather[0].description}</p>
    </div>
  );
}
