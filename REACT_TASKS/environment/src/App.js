import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  useEffect(() => {
    console.log(environment);
  }, []);

  const environment = process.env.REACT_APP_ENV;
  // const apiKey = process.env.REACT_APP_API_KEY;
  // const apiUrl = process.env.REACT_APP_API_URL;

  // console.log(`API Key: ${apiKey}`);
  // console.log(`API URL: ${apiUrl}`);

  return (
    <>
      <h2>Current Environment: {environment}</h2>
      <Weather/>
    </>
  );
}

export default App;
