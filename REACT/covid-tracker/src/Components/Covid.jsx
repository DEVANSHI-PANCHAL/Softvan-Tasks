import React, { useEffect, useState } from 'react';

const Covid = () => {
  const [currDate, setCurrDate] = useState();

  const getCovidData = async () => {
    try {
      const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const apiUrl = 'https://api.covid19india.org/data.json';

      const res = await fetch(corsProxyUrl + apiUrl);
      const data = await res.json();
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCovidData();

    const currentDate = new Date();
    // Format the date to a string
    const formattedDate = currentDate.toDateString();
    
    setCurrDate(formattedDate);
  }, []);

  const currentTime = new Date().toLocaleTimeString()
  return (
    <div>
      {currDate && <p>Current Date: {currDate}
      {currentTime}</p>}
    </div>
  );
};

export default Covid;
