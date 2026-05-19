
import { useEffect, useState } from "react";
import styles from "./ListForecast.module.css";
import cont from "../container.module.css";

const API_KEY = "dd18da5f259e0663b49b24c13739099c";
export function ListForecast() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Vinnytsia&units=metric&lang=ua&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list
        .filter((item) => item.dt_txt.includes("12:00:00")
        );

        setForecast(dailyData);
      });
  }, []);

  return (
    <section className={`${styles.wrapper} ${cont.container} `}>
      <h2 className={styles.title}>Weekly forecast</h2>

      <div className={styles.cards}>
        {forecast.map((item) => (
          <div className={styles.card} key={item.dt}>
            <p className={styles.date}>
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </p>

            <img
              className={styles.icon}
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
            />

            <p className={styles.temp}>
              {Math.round(item.main.temp_max)}°
              {Math.round(item.main.temp_min)}°C
            </p>

            <p className={styles.desc}>
              {item.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}