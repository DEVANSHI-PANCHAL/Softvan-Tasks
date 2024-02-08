import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [randomQuote, setRandomQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    generateRandomQuote();
  }, []); // Fetch initial quote on first load

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  const tweetQuote = () => {
    const twitterURL = `https://twitter.com/intent/tweet?text="${randomQuote.text}" - ${randomQuote.author}`;
    window.open(twitterURL, '_blank');
  };

  return (
    <div id="quote-box" style={{ textAlign: 'center' }}>
      <h1>Random Quote Generator</h1>
      <button id="new-quote" onClick={generateRandomQuote}>Generate Quote</button> {/* Button for new quote */}
      <p id="text">{randomQuote.text}</p>
      <p id="author">- {randomQuote.author}</p>
      <a id="tweet-quote" href="#" onClick={tweetQuote}>Tweet Quote</a> {/* Anchor tag for tweeting */}
    </div>
  );
};

export default QuoteGenerator;

const quotes = [
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'Life is what happens when you\'re busy making other plans.', author: 'John Lennon' },
  { text: 'In the end, it\'s not the years in your life that count. It\'s the life in your years.', author: 'Abraham Lincoln' },
  // Add more quotes as needed
];
