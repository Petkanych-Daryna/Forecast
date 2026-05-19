import { useState } from "react";
import styles from "./Hero.module.css";
import cont from "../container.module.css";


export function Hero({ onSearch }) {
 
  const [cityInput, setCityInput] = useState("");


  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    if (cityInput.trim()) {
      onSearch(cityInput); 
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(e);
    }
  };

  return (
    <div className={`${styles.heroImg} ${styles.heroDiv} ${cont.container}`}>
      <div className={styles.titleDiv}>
        <h1 className={styles.mainTitle}>Weather dashboard</h1>
      </div>

      <div className={styles.contentBox}>
        <div className={styles.content}>
          <div className={styles.fixLine}>
            <div className={styles.textFirst}>
              Create your personal list of favorite cities and always be aware
              of the weather.
            </div>
            <div className={styles.textSec}>October 2023 Friday, 13th</div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSearchSubmit} className={styles.heroBtnInt}>
        <input
          className={styles.heroInt}
          placeholder="Search location..."
          type="text"
          value={cityInput} 
          onChange={(e) => setCityInput(e.target.value)} 
          onKeyDown={handleKeyDown} 
        />
        <button type="submit" className={styles.heroBtn}>

        </button>
      </form>
    </div>
  );
}