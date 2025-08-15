import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span className="cell" key={num}>
          {guess && guess.charAt(num)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
