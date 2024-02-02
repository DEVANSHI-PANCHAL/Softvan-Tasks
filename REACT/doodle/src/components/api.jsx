import React, { useEffect, useState } from 'react';

const Api = async () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://google-api31.p.rapidapi.com/websearch';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'ca836ae2e1mshe707891fa36ed93p174abbjsne049ebf9e824',
          'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        body: JSON.stringify({
          text: 'Google',
          safesearch: 'off',
          timelimit: '',
          region: 'wt-wt',
          max_results: 20
        })
      };

      try {
        const response = await fetch(url, options);
        const resultData = await response.text();
        console.log(resultData)
        setResult(resultData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      <p>Result: {result}</p>
    </div>
  );
};

export default Api;
