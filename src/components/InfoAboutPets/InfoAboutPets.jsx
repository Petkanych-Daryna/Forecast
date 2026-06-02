import React from "react";
import { usePetNews } from "./usePetNews";
import { PetCard } from "./PetCard";

import styles from "./InfoAboutPets.module.css";
import cont from "../container.module.css";

export function InfoAboutPets() {
  const { articles, loading, loadMore } = usePetNews();

  return (
    <section className={`${styles.container} ${cont.container}`}>
      <div className={styles.box}>
        <h2 className={styles.title}>Interacting with our pets</h2>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <PetCard key={`${article.title}-${index}`} article={article} />
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={styles.loadMoreBtn}
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "See more"}
          </button>
        </div>
      </div>
    </section>
  );
}
