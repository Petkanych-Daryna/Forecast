import styles from "./WeatherCard.module.css";

export function MainWeather({ weather, onSeeMore, isOpen }) {
  return (
    <section className={styles.main}>
      <div className={styles.card}>
        <div className={styles.location}>
          <span>{weather.name}</span>
          <span>{weather.sys?.country}</span>
        </div>
        
        <h2 className={styles.time}>
          {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </h2>

        <img 
          className={styles.icon}
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
          alt="weather" 
        />
        
        <h1 className={styles.temp}>{Math.round(weather.main.temp)}°C</h1>
        
        <div className={styles.controls}>
          <button className={styles.seeMoreBtn} onClick={onSeeMore}>
            {isOpen ? "Сховати" : "See more"}
          </button>
        </div>
      </div>
    </section>
  );
}