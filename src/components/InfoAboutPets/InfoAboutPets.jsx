import { useState, useEffect, useCallback } from "react";

import styles from "./InfoAboutPets.module.css";
import cont from "../container.module.css";

export function InfoAboutPets() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const API_KEY = "3a5d9c01f54145116c9341d48b1d77b3";

  const fetchNews = useCallback(
    async (pageNum) => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=pets+OR+animals+OR+dogs+OR+cats&in=title,description&lang=en&max=4&page=${pageNum}&apikey=${API_KEY}`,
        );

        const data = await response.json();

        if (data.articles) {
          setArticles((prev) => {
            const combined =
              pageNum === 1 ? data.articles : [...prev, ...data.articles];

            return combined.filter(
              (article, index, self) =>
                index === self.findIndex((t) => t.title === article.title),
            );
          });
        }
      } catch (error) {
        console.error("Помилка:", error);
      } finally {
        setLoading(false);
      }
    },
    [API_KEY],
  );

  useEffect(() => {
    fetchNews(1);
  }, [fetchNews]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNews(nextPage);
  };

  return (
    <section className={`${styles.container} ${cont.container}`}>
      <div className={styles.box}>
        <h2 className={styles.title}>Interacting with our pets</h2>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <article key={`${article.title}-${index}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  className={styles.img}
                  src={
                    article.image
                      ? article.image
                      : "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt={article.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className={styles.cardTitle}>{article.title}</h3>
            </article>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={styles.loadMoreBtn}
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "See more"}
          </button>
        </div>
      </div>
    </section>
  );
}
