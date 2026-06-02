import React from "react";
import { SearchForm } from "./SearchForm";
import styles from "./Hero.module.css";
import cont from "../container.module.css";

export function Hero({ onSearch }) {
  return (
    <div className={`${styles.heroImg} ${styles.heroDiv} ${cont.container}`}>
      <div className={styles.contentBox}>
        <div>
          <div className={styles.content}>
        <div className={styles.titleDiv}>
          <h1 className={styles.mainTitle}>Weather dashboard</h1>
        </div>
            <div className={styles.fixLine}>
              <div className={styles.textFirst}>
                Create your personal list of favorite cities and always be aware
                of the weather.
              </div>
              <div className={styles.textSec}>October 2023 Friday, 13th</div>
            </div>
          <SearchForm onSearch={onSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}
