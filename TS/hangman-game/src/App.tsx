import { useState, useEffect } from 'react';
import wordsData from './wordList.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';

interface WordData {
  words: string[];
}

const words: WordData = wordsData;
 
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomIndex = Math.floor(Math.random() * words.words.length);
    return words.words[randomIndex];
  });

  const[guessedLetters, setGuessedLetters] = useState<string[]>([])

  useEffect(() => {
    console.log(wordToGuess); 
  }, []); 

  return (
    <>
      <p>{wordToGuess}</p>
      <p>Hello ts project</p>
      <div 
      style={{
        maxWidth:"800px",
        display: "flex",
        flexDirection: "column",
        gap :"2rem",
        margin:"0 auto",
        alignItems:"center"

      }}>
        <div style= {{ fontSize:'2rem', textAlign:"center"}}>
          Lose 
          Win
        </div>
        <HangmanDrawing/>
        <HangmanWord />
        <Keyboard />
      </div>
    </>
  );
}

export default App;
