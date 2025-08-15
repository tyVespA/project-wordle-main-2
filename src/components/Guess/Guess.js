import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        let checkedClass;
        checkedGuess && (checkedClass = checkedGuess[num].status);

        return (
          <span className={`cell ${checkedClass}`} key={num}>
            {guess && checkedGuess[num].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
