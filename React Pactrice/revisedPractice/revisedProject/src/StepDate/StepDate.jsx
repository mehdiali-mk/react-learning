import React, { use, useState } from "react";
import "./StepDateStyle.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      <div className="handler">
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <div>Step: {step}</div>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div className="handler">
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <div>Count: {count}</div>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <div>
        <h1>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </h1>
      </div>
      <div className="reset">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
