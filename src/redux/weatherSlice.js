import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    forecastData: null,
    favoriteCities: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setWeatherData: (state, action) => {
      state.weatherData = action.payload.weather;
      state.forecastData = action.payload.forecast;
      state.error = null;
    },
    setFavoritesCities: (state, action) => {
      state.favoriteCities = action.payload;
      state.error = null;
    },
  },
});

export const { setLoading, setError, setWeatherData, setFavoritesCities } =
  weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
