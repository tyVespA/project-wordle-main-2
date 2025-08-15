import React from "react";
import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  function handleSubmitGuess(guess) {
    const nextGuessList = [...guessList, guess];
    if (nextGuessList.length === 6 || nextGuessList.includes(answer)) {
      setGameOver(true);
    }
    setGuessList([...guessList, guess]);
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />

      <GuessInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver} />

      {guessList.length === 6 || guessList.includes(answer) ? (
        <Banner guessList={guessList} answer={answer} />
      ) : (
        ""
      )}
    </>
  );
}

export default Game;
