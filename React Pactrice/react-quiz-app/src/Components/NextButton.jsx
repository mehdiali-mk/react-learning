function NextButton({ dispatch, answer, questionIndex, numberOfQuestions }) {
  const lastQuestion = questionIndex === numberOfQuestions - 1;

  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        lastQuestion
          ? dispatch({ type: "finishQuiz" })
          : dispatch({ type: "nextQuestion" });
      }}
    >
      {lastQuestion ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
