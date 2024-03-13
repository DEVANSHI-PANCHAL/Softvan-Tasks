import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchWeatherDataRequest(state) {
      state.loading = true;
    },
    fetchWeatherDataSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchWeatherDataFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.data = null;
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const {fetchWeatherDataRequest,fetchWeatherDataSuccess,fetchWeatherDataFailure} = weatherDataSlice.actions;

export default weatherDataSlice.reducer;