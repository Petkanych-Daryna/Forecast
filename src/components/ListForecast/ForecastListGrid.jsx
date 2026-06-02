import React from "react";
import { ForecastCard } from "./ForecastCard";
import styles from "./ListForecast.module.css";

export function ForecastListGrid({ forecast }) {
  return (
    <div className={styles.cards}>
      {forecast.map((item) => (
        <ForecastCard key={item.dt} item={item} />
      ))}
    </div>
  );
}