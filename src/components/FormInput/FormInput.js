import React from "react";
import { useState } from "react";

function FormInput() {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    setInput("");
  }
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          // minLength={5}
          pattern="\w{5,5}"
          title="5 characters"
          maxLength={5}
        />
      </form>
    </div>
  );
}

export default FormInput;
