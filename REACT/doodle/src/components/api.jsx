import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://google-search72.p.rapidapi.com/search',
        params: {
          q: 'word cup',
          gl: 'us',
          lr: 'lang_en',
          num: '10',
          start: '0'
        },
        headers: {
          'X-RapidAPI-Key': 'ca836ae2e1mshe707891fa36ed93p174abbjsne049ebf9e824',
          'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setResult(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Result: {JSON.stringify(result)}</p>
    </div>
  );
};

export default Api;
