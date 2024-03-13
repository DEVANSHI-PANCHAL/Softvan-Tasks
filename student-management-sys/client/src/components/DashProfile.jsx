import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../redux/weather/weatherDataSlice';
import { Card } from 'flowbite-react';
import { selectUser } from '../redux/user/userSlice';

const DashProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const location = import.meta.env.VITE_APP_LOCATION;

  useEffect(() => {
    dispatch(fetchWeatherData(location));
  }, [dispatch, location]);

  const weatherData = useSelector((state) => state.weatherData.data);
  const loading = useSelector((state) => state.weatherData.loading);
  const error = useSelector((state) => state.weatherData.error);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user}!</h2>
      <Card>
        {weatherData && (
          <>
            <p className="mb-2">Temperature: {weatherData.main?.temp}°C</p>
            <p className="mb-2">Humidity: {weatherData.main?.humidity}%</p>
            <p className="mb-2">Wind Speed: {weatherData.wind?.speed} m/s</p>
            <p className="mb-2">Weather: {weatherData.weather?.[0]?.description}</p>
          </>
        )}
      </Card>
    </div>
  );
};

export default DashProfile;