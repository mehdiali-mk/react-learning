import { useEffect } from "react";

function Timer({ dispatch, remainingSeconds }) {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  useEffect(
    function () {
      const dispatchTimer = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(dispatchTimer);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
