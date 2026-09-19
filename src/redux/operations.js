import {
  setLoading,
  setError,
  setWeatherData,
  setFavoritesCities,
} from "./weatherSlice";

const MOCK_API_URL = "https://6a43f67a6dba791499abac95.mockapi.io";
const WEATHER_API_KEY = "dd18da5f259e0663b49b24c13739099c";

export const fetchWeather =
  (query = "Kyiv") =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));

      let url = "";
      let forecastUrl = "";

      if (
        typeof query === "object" &&
        query !== null &&
        typeof query.lat === "number" &&
        typeof query.lon === "number"
      ) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&units=metric&lang=ua&appid=${WEATHER_API_KEY}`;
        forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${query.lat}&lon=${query.lon}&units=metric&lang=ua&appid=${WEATHER_API_KEY}`;
      } else {
        const city = typeof query === "string" && query.trim() ? query : "Kyiv";
        url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&lang=ua&appid=${WEATHER_API_KEY}`;
        forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&lang=ua&appid=${WEATHER_API_KEY}`;
      }

      const res1 = await fetch(url);
      const res2 = await fetch(forecastUrl);

      if (!res1.ok || !res2.ok) throw new Error("Місто не знайдено");

      const weather = await res1.json();
      const forecast = await res2.json();

      dispatch(setWeatherData({ weather, forecast }));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const fetchFavoriteCities = () => async (dispatch) => {
  try {
    const res = await fetch(`${MOCK_API_URL}/todos`);
    if (!res.ok) throw new Error("Не вдалося завантажити міста");
    const data = await res.json();
    dispatch(setFavoritesCities(data));
  } catch (err) {
    dispatch(setError(err.message));
  }
};
