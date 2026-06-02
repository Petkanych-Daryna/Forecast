const API_KEY = "52746634-048ebfd846d8921f5de123532";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchNatureImages() {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=nature&image_type=photo&per_page=30`,
  );

  if (!response.ok) {
    throw new Error(`Помилка завантаження картинок: ${response.status}`);
  }

  const data = await response.json();
  return data.hits;
}
