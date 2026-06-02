const API_KEY = "c502a3763fe54ccb9d32262f008ae01d";
const BASE_URL = "https://newsapi.org/v2/everything";

export async function fetchPetNews(pageNum) {
  const response = await fetch(
    `${BASE_URL}?q=pet&searchIn=title&language=en&pageSize=4&page=${pageNum}&apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Помилка API: ${response.status}`);
  }

  const data = await response.json();
  return data.articles || [];
}