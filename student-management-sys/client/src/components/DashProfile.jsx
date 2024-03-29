import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, TextInput } from 'flowbite-react';
import { selectUser } from '../redux/user/userSlice';
import { fetchWeatherData } from '../redux/weather/weatherThunk';
import { useGetPokemonByNameQuery } from '../service/pokemonApi';

const DashProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const currentUser = user.payload.data.user.username;
  const location = import.meta.env.VITE_APP_LOCATION;
  const [pokemonName, setPokemonName] = useState('');

  const { data, pokeError, isLoading } = useGetPokemonByNameQuery(pokemonName);

  useEffect(() => {
    // Dispatch the fetchWeatherData action to trigger the saga
    dispatch(fetchWeatherData(location))
  }, [dispatch, location]);

  const weatherData = useSelector((state) => state?.weatherData.data);
  // console.log("weatherData", weatherData)
  const loading = useSelector((state) => state?.weatherData.loading);
  const error = useSelector((state) => state?.weatherData.error);

  const weatherType = weatherData?.weather?.[0]?.description;
  console.log("weatherType",weatherType)
  let cardBackground = "bg-white";

  if (weatherType === 'clear sky') {
    cardBackground = "https://images.pexels.com/photos/633520/pexels-photo-633520.jpeg?cs=srgb&dl=pexels-neosiam-%2B-633520.jpg&fm=jpg";
  } else if (weatherType === 'few clouds') {
    cardBackground = "https://cdn.openart.ai/uploads/image_BjfiZK55_1680819407139_512.webp";
  } else if (weatherType === 'scattered clouds') {
    cardBackground = "https://cdn.openart.ai/uploads/image_BjfiZK55_1680819407139_512.webp";
  } else if (weatherType === 'broken clouds') {
    cardBackground = "https://cdn.openart.ai/uploads/image_BjfiZK55_1680819407139_512.webp";
  } else if (weatherType === 'shower rain') {
    cardBackground = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppZkRPhcffQHMR5BgsqgTV6WL87p4rPlyokiFyb9bmg&s";
  } else if (weatherType === 'rain') {
    cardBackground = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppZkRPhcffQHMR5BgsqgTV6WL87p4rPlyokiFyb9bmg&s";
  } else if (weatherType === 'thunderstorm') {
    cardBackground = "https://c4.wallpaperflare.com/wallpaper/639/390/452/storm-lightning-city-night-wallpaper-preview.jpg";
  } else if (weatherType === 'snow') {
    cardBackground = "https://c4.wallpaperflare.com/wallpaper/898/612/992/winter-road-snow-the-city-wallpaper-preview.jpg";
  } else if (weatherType === 'mist') {
    cardBackground = "https://c0.wallpaperflare.com/preview/713/215/681/buildings-city-city-lights-cityscape.jpg"
  } else if (weatherType === 'smoke') {
    cardBackground = "data:image/jpeg;base64,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"
    console.log("smokle")
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser}!</h2>
      <div className="grid grid-cols-2 gap-4">
      <Card style={{ backgroundImage: `url('${cardBackground}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {weatherData && (
          <>
            <p className="mb-2 text-blue-900">Temperature: {weatherData?.main?.temp}°C</p>
            <p className="mb-2 text-blue-900">Humidity: {weatherData?.main?.humidity}%</p>
            <p className="mb-2 text-blue-900">Wind Speed: {weatherData?.wind?.speed} m/s</p>
            <p className="mb-2 text-blue-900">
              Weather: {weatherData?.weather?.[0]?.description}
            </p>
          </>
        )}
      </Card>
     <Card>
     <form onSubmit={(e) => {
          e.preventDefault();
          setPokemonName(e.target.elements.pokemonName.value);
        }}>
          <TextInput
            type="text"
            name="pokemonName"
            placeholder="Enter a pokemon name..."
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
          {/* <button type="submit">Search</button> */}
        </form>
        {data && data.name && (
        <>
         <p className="mb-2">Name: {data.name}</p>
          <p className="mb-2">Height: {data.height}</p>
          <p className="mb-2">Weight: {data.weight}</p>
          <p className="mb-2">
            Types:{' '}
            {data.types.map((type, index) => (
              <span key={index}>
                {type.type?.name}
                {index < data.types.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p className="mb-2">
            Abilities:{' '}
            {data.abilities.map((ability, index) => (
              <span key={index}>
                {ability.ability.name}
                {index < data.abilities.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p className="mb-2">
            Moves:{' '}
            {data.moves.map((move, index) => (
              <span key={index}>
                {move.move.name}
                {index < data.moves.length - 1 ? ', ' : ''}
              </span>
            ))}
</p>
        </>
      )}
     </Card>
      </div>
    </div>
  );
};

export default DashProfile;