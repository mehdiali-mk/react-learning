import React from "react";

export default function StartScreen({ numberOfQuestions, dispatch, status }) {
  console.log(status);
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your react mastery.</h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          console.log("Mehdiali");
          dispatch({ type: "start" });
        }}
      >
        Let's start
      </button>
    </div>
  );
}
