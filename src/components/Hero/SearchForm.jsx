import React, { useState } from "react";
import styles from "./Hero.module.css";

export function SearchForm({ onSearch }) {
  const [cityInput, setCityInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim()) {
      onSearch(cityInput);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className={styles.heroBtnInt}>
      <input
        className={styles.heroInt}
        placeholder="Search location..."
        type="text"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
      />
      <button type="submit" className={styles.heroBtn}></button>
    </form>
  );
}
