import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeatherData = createAsyncThunk(
  'weatherData/fetchWeatherData',
  async (location) => {
    const apiKey = import.meta.env.VITE_APP_OPENWEATHERMAP_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );
    const data = response.data;
    const celsiusTemp = (data.main.temp - 273.15).toFixed(1);
    return { ...data, main: { ...data.main, temp: celsiusTemp } };
  }
);