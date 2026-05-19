

import styles from "./WeatherCard.module.css";

export function WeatherCardTwo({ title, value }) {
  return (
    <div className={styles.smallCard}>
      <p className={styles.title}>{title}</p>

      <h2 className={styles.value}>{value}</h2>
    </div>
  );
}