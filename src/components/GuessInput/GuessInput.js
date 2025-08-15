import React from "react";
import { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(guess);
    setGuess("");
  }
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
          // minLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letters"
          maxLength={5}
        />
      </form>
    </div>
  );
}

export default GuessInput;
