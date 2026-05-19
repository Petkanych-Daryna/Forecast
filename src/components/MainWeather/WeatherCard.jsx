import styles from "./WeatherCard.module.css";
import cont from "../container.module.css";


export function WeatherCard({ weather }) {
  return (
    <section className={`${styles.detailsWrapper} ${cont.container}`}>
      <div className={`${styles.detailsContainer} `}>
        <div className={styles.detailItem}>
          <p>Відчувається</p>
          <h3>{Math.round(weather.main.feels_like)}°C</h3>
        </div>
        <div className={styles.detailItem}>
          <p>Вологість</p>
          <h3>{weather.main.humidity}%</h3>
        </div>
        <div className={styles.detailItem}>
          <p>Вітер</p>
          <h3>{weather.wind.speed} м/с</h3>
        </div>
        <div className={styles.detailItem}>
          <p>Тиск</p>
          <h3>{weather.main.pressure} hPa</h3>
        </div>
      </div>
    </section>
  );
}