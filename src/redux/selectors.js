import { createSelector } from "@reduxjs/toolkit";

export const getWeather = (state) => state.weather.weatherData;
export const getForecast = (state) => state.weather.forecastDate;
export const getIsLoading = (state) => state.weather.isLoading;
export const getError = (state) => state.weather.error;
export const getFavoritesCities = (state) => state.weather.favoritesCities;

export const getSourtedCities = createSelector(
  [getFavoritesCities],
  (cities) => {
    console.log("Calculated sorted cities");
    return [...cities].sort((a, b) => a.name.locateCompare(b.name));
  },
);

export const getCitiesCount = createSelector([getFavoritesCities], (cities) => {
  console.log("Calculated cities count");
  return cities.length;
});
