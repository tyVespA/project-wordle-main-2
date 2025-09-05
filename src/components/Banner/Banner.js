import React from "react";

function Banner({ guessList, answer }) {
  let bannerType = "";
  if (guessList.length === 6) {
    bannerType = "sad";
  } else if (guessList.includes(answer)) {
    bannerType = "happy";
  }

  return (
    <div className={`${bannerType} banner`}>
      {bannerType === "happy" && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {guessList.length === 1 ? "1 guess" : `${guessList.length} guesses`}
          </strong>{" "}
        </p>
      )}
      {bannerType === "sad" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
