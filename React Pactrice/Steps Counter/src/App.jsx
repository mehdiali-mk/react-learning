import { useState } from "react";
import "./App.css";

function App() {
  const [steps, updateSteps] = useState(1);
  const [count, updateCount] = useState(0);

  function getFormattedDate(offset) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + offset); // Add or subtract days

    const day = currentDate.toLocaleString("en-US", { weekday: "short" });
    const month = currentDate.toLocaleString("en-US", { month: "long" });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${day} ${month} ${date} ${year}`;
  }

  // function handleNext() {
  //   steps < 3 && updateSteps(steps + 1);
  // }

  // function handlePrevious() {
  //   steps > 1 && updateSteps(steps - 1);
  // }

  function handleStepsPrevious() {
    steps > 1 && updateSteps(steps - 1);
  }

  function handleStepsNext() {
    updateSteps(steps + 1);
  }

  function handleCountPrevious() {
    updateCount(count - steps);
  }

  function handleCountNext() {
    updateCount(count + steps);
  }

  return (
    <>
      {/* <div className="steps">
        <div className="numbers">
          <div className={steps >= 1 ? "active" : ""}>1</div>
          <div className={steps >= 2 ? "active" : ""}>2</div>
          <div className={steps >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
          Step {steps}: {messages[steps - 1]}
        </p>

        <div className="buttons">
          <button className="previous" onClick={handlePrevious}>
            Previous
          </button>
          <button className="next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div> */}

      <div className="my-steps">
        <button className="button" onClick={handleStepsPrevious}>
          {" "}
          -{" "}
        </button>
        <p className="steps-text">Step: {steps}</p>
        <button className="button" onClick={handleStepsNext}>
          {" "}
          +{" "}
        </button>
      </div>
      <div className="my-count">
        <button className="button" onClick={handleCountPrevious}>
          {" "}
          -{" "}
        </button>
        <p className="count-text">Count: {count}</p>
        <button className="button" onClick={handleCountNext}>
          {" "}
          +{" "}
        </button>
      </div>

      <div className="my-text">
        {count === 0
          ? "Today"
          : count < 1
          ? `${count * -1} days ago was`
          : `${count} days from today`}{" "}
        is {getFormattedDate(count)}
      </div>
    </>
  );
}

export default App;
