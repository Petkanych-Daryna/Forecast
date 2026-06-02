import { useState, useEffect, useCallback } from "react";
import { fetchPetNews } from "./newsApi";

export function usePetNews() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getNews = useCallback(async (pageNum) => {
    setLoading(true);
    try {
      const fetchedArticles = await fetchPetNews(pageNum);

      setArticles((prev) => {
        const combined = pageNum === 1 ? fetchedArticles : [...prev, ...fetchedArticles];
        
        return combined.filter(
          (article, index, self) =>
            index === self.findIndex((t) => t.title === article.title)
        );
      });
    } catch (error) {
      console.error("Помилка в хуку при отриманні новин:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getNews(1);
  }, [getNews]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    getNews(nextPage);
  };

  return { articles, loading, loadMore };
}