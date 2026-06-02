const API_KEY = "dd18da5f259e0663b49b24c13739099c";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

export async function fetchWeatherForecast({ city, lat, lon } = {}) {
  let url = `${BASE_URL}?units=metric&lang=ua&appid=${API_KEY}`;


  if (lat && lon) {
    url += `&lat=${lat}&lon=${lon}`;
  } else {

    const searchCity = city || "Vinnytsia";
    url += `&q=${searchCity}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Помилка завантаження погоди: ${response.status}`);
  }

  const data = await response.json();
  return data.list.filter((item) => item.dt_txt.includes("12:00:00"));
}