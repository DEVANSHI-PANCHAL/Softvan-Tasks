// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchWeatherData } from '../redux/weather/weatherDataSlice';
// import { Card } from 'flowbite-react';
// import { selectUser } from '../redux/user/userSlice';
// import { fetchWeatherData } from '../redux/weather/weatherThunk';
// import { useGetPokemonByNameQuery } from '../service/pokemonApi';

// const DashProfile = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);
//   const currentUser = user.payload.data.user.username;
//   const location = import.meta.env.VITE_APP_LOCATION;
//   const { data, pokeError, isLoading } = useGetPokemonByNameQuery('bulbasaur');
//   console.log("DATA", data)

//   useEffect(() => {
//     // Dispatch the fetchWeatherData action to trigger the saga
//     // dispatch(fetchWeatherData(location));
//     dispatch(fetchWeatherData(location))
//   }, [dispatch, location]);

//   const weatherData = useSelector((state) => state.weatherData.data);
//   const loading = useSelector((state) => state.weatherData.loading);
//   const error = useSelector((state) => state.weatherData.error);

//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center">Error: {error}</div>;
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser}!</h2>
//       <Card>
//         {weatherData && (
//           <>
//             <p className="mb-2">Temperature: {weatherData.main?.temp}°C</p>
//             <p className="mb-2">Humidity: {weatherData.main?.humidity}%</p>
//             <p className="mb-2">Wind Speed: {weatherData.wind?.speed} m/s</p>
//             <p className="mb-2">Weather: {weatherData.weather?.[0]?.description}</p>
//           </>
//         )}
//       </Card>
//       <>
//              <p className="mb-2">Name: {data.name}</p>
//             <p className="mb-2">Height: {data.height}</p>
//             <p className="mb-2">Weight: {data.weight}</p> 
//             <p className="mb-2">
//               Types:{' '}
//               {data.types.map((type, index) => (
//                 <span key={index}>
//                   {type.type?.name}
//                   {index < data.types.length - 1 ? ', ' : ''}
//                 </span>
//               ))}
//             </p>
//             <p className="mb-2">
//               Abilities:{' '}
//               {data.abilities.map((ability, index) => (
//                 <span key={index}>
//                   {ability.ability.name}
//                   {index < data.abilities.length - 1 ? ', ' : ''}
// </span>
//               ))}
//             </p>
//             <p className="mb-2">
//               Moves:{' '}
//               {data.moves.map((move, index) => (
//                 <span key={index}>
//                   {move.move.name}
//                   {index < data.moves.length - 1 ? ', ' : ''}
//                 </span>
//               ))}
//             </p>
//           </>
//     </div>
//   );
// };

// export default DashProfile;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeatherData } from '../redux/weather/weatherDataSlice';
import { Card } from 'flowbite-react';
import { selectUser } from '../redux/user/userSlice';
import { fetchWeatherData } from '../redux/weather/weatherThunk';
import { useGetPokemonByNameQuery } from '../service/pokemonApi';

const DashProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const currentUser = user.payload.data.user.username;
  const location = import.meta.env.VITE_APP_LOCATION;
  const [pokemonName, setPokemonName] = useState('bulbasaur');

  const { data, pokeError, isLoading } = useGetPokemonByNameQuery(pokemonName);

  useEffect(() => {
    // Dispatch the fetchWeatherData action to trigger the saga
    // dispatch(fetchWeatherData(location));
    dispatch(fetchWeatherData(location))
  }, [dispatch, location]);

  const weatherData = useSelector((state) => state.weatherData.data);
  const loading = useSelector((state) => state.weatherData.loading);
  const error = useSelector((state) => state.weatherData.error);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser}!</h2>
      <Card>
        <form onSubmit={(e) => {
          e.preventDefault();
          setPokemonName(e.target.elements.pokemonName.value);
        }}>
          <input
            type="text"
            name="pokemonName"
            placeholder="Enter a pokemon name..."
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {weatherData && (
          <>
            <p className="mb-2">Temperature: {weatherData.main?.temp}°C</p>
            <p className="mb-2">Humidity: {weatherData.main?.humidity}%</p>
            <p className="mb-2">Wind Speed: {weatherData.wind?.speed} m/s</p>
            <p className="mb-2">
              Weather: {weatherData.weather?.[0]?.description}
            </p>
          </>
        )}
      </Card>
      {data && (
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
    </div>
  );
};

export default DashProfile;
