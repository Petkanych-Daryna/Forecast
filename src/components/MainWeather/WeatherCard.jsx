import styles from "./WeatherCard.module.css";
import cont from "../container.module.css";
import feelsLike from "../../img/WeatherCardImg/feelsLike.png"
import humidity from "../../img/WeatherCardImg/humidity.png"
import windSpeed from "../../img/WeatherCardImg/windSpeed.png"
import pressure from "../../img/WeatherCardImg/pressure.png"


export function WeatherCard({ weather }) {
  return (
    <section className={`${styles.detailsWrapper} ${cont.container}`}>
      <div className={`${styles.detailsContainer} `}>
        <div className={styles.detailItem}>
          <p>Відчувається</p>
          <h3>{Math.round(weather.main.feels_like)}°C</h3>
          <img src={feelsLike} alt="feels_like" />
        </div>
        <div className={styles.detailItem}>
          <p>Вологість</p>
          <h3>{weather.main.humidity}%</h3>
          <img src={humidity} alt="humidity" />
        </div>
        <div className={styles.detailItem}>
          <p>Вітер</p>
          <h3>{weather.wind.speed} м/с</h3>
          <img src={windSpeed} alt="windSpeed" />
        </div>
        <div className={styles.detailItem}>
          <p>Тиск</p>
          <h3>{weather.main.pressure} hPa</h3>
          <img src={pressure} alt="pressure" />
        </div>
      </div>
    </section>
  );
}