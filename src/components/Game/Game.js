import React from "react";
import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);

  function handleSubmitGuess(guess) {
    setGuessList([...guessList, guess]);
  }
  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      {/* <Guess guessList={guessList} /> */}
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
