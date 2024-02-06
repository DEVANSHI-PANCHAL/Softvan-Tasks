import React, { useState } from 'react';

function GoogleSearch() {
  const [searchResults, setSearchResults] = useState([]);

  const loadClient = () => {
    window.gapi.client.setApiKey("YOUR_API_KEY");
    return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest")
      .then(() => console.log("GAPI client loaded for API"))
      .catch(err => console.error("Error loading GAPI client for API", err));
  };

  const executeSearch = () => {
    window.gapi.client.search.cse.list({
      q: "AIzaSyBZDw1iHRgANdAmxojroxpGlTHboCq_ezI", // Add your search query here
      cx: "AIzaSyBZDw1iHRgANdAmxojroxpGlTHboCq_ezI" // Replace with your custom search engine ID
    })
      .then(response => {
        // Handle the results here
        console.log("Response", response);
        setSearchResults(response.result.items); // Assuming you want to store search results
      })
      .catch(err => console.error("Error executing search", err));
  };

  return (
    <div>
      <button onClick={loadClient}>Load</button>
      <button onClick={executeSearch}>Search</button>
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
            <p>{item.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoogleSearch;
