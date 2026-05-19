const API_KEY = "dd18da5f259e0663b49b24c13739099c"; 

const fetchJSON = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Помилка API");
  return response.json();
};


export const WeatherApi = (lat, lon) => 
  fetchJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ua&appid=${API_KEY}`);

export const ForecastApi = (lat, lon) => 
  fetchJSON(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=ua&appid=${API_KEY}`);


export const WeatherByCityApi = (city) => 
  fetchJSON(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&lang=ua&appid=${API_KEY}`);

export const ForecastByCityApi = (city) => 
  fetchJSON(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&lang=ua&appid=${API_KEY}`);