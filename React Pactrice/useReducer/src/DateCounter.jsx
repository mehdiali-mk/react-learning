import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { count: state.count - state.step, step: state.step };
    case "inc":
      return { count: state.count + state.step, step: state.step };
    case "setCount":
      return { count: action.payload, step: state.step };
    case "setStep":
      return { count: state.count, step: action.payload };
    case "reset":
      return action.payload;
    default:
      throw new Error("Invalid action type");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const initilizeState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initilizeState);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // despatch({ type: "setCount", payload: 0 });
    // setStep(1);
    dispatch({ type: "reset", payload: initilizeState });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
