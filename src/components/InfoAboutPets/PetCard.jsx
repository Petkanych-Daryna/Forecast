import React from "react";
import styles from "./InfoAboutPets.module.css";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop";

export function PetCard({ article }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.img}
          src={article.urlToImage ? article.urlToImage : DEFAULT_IMAGE}
          alt={article.title}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <h3 className={styles.cardTitle}>{article.title}</h3>
    </article>
  );
}
