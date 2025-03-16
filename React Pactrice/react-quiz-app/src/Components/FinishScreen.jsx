function FinishScreen({ points, maximumPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maximumPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} out of {maximumPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "resetQuiz" })}
      >
        Reset Quiz
      </button>
    </>
  );
}

export default FinishScreen;
