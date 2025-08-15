import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((guessChar, guessCharIndex) => (
        <span className="cell" key={guessCharIndex}>
          {guess && guess.charAt(guessCharIndex)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
