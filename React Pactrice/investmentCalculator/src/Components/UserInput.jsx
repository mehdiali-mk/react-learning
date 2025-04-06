import classes from "./UserInput.module.css";

function UserInput({ userInputData, setUserInputData, calculateHandler }) {
  function userInputHandler(event) {
    const textBoxName = event.target.id;
    const textBoxValue = event.target.value;
    console.log(textBoxName, textBoxValue);
    setUserInputData((currentUserInputData) => {
      return { ...currentUserInputData, [textBoxName]: textBoxValue };
    });
  }

  function resetHandler() {
    setUserInputData({
      currentSaving: 10000,
      yearlyContribution: 1200,
      expectedReturn: 5,
      duration: 10,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    calculateHandler(userInputData);
  }

  return (
    <form className={classes.form}>
      <div className={classes.inputGroup}>
        <p>
          <label htmlFor="currentSaving">Current Savings ($)</label>
          <input
            type="number"
            id="currentSaving"
            value={userInputData.currentSaving}
            onChange={(e) => userInputHandler(e)}
          />
        </p>
        <p>
          <label htmlFor="yearlyContribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearlyContribution"
            value={userInputData.yearlyContribution}
            onChange={(e) => userInputHandler(e)}
          />
        </p>
      </div>
      <div className={classes.inputGroup}>
        <p>
          <label htmlFor="expectedReturn">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expectedReturn"
            value={userInputData.expectedReturn}
            onChange={(e) => userInputHandler(e)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInputData.duration}
            onChange={(e) => userInputHandler(e)}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button
          type="submit"
          className={classes.button}
          onClick={submitHandler}
        >
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;
