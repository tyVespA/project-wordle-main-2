import React from "react";

function GuessResults({ guessList }) {
  return (
    <div>
      <div className="guess-results">
        {guessList.map((guess, index) => (
          <p className="guess" key={index}>
            {guess}
          </p>
        ))}
      </div>
    </div>
  );
}

export default GuessResults;
