import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, guessIndex) => (
        <p className="guess" key={guessIndex}>
          {range(5).map((guessChar, guessCharIndex) => (
            <span className="cell" key={guessCharIndex}>
              {guessList[guessIndex] &&
                guessList[guessIndex].charAt(guessCharIndex)}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
