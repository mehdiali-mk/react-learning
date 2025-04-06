import { useState } from "react";
import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import ResultTable from "./Components/resultTable.jsx";

function App() {
  const [userInputData, setUserInputData] = useState({
    currentSaving: 10000,
    yearlyContribution: 1200,
    expectedReturn: 5,
    duration: 10,
  });
  const [yearlyCalculatedData, setYearlyCalculatedData] = useState([]);
  const [initialInvestment, setInitialInvestment] = useState("");

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = Number(userInput.currentSaving); // feel free to change the shape of this input object!
    const yearlyContribution = Number(userInput.yearlyContribution); // as mentioned: feel free to change the shape...
    const expectedReturn = Number(userInput.expectedReturn / 100);
    const duration = Number(userInput.duration);

    console.log(typeof userInput.yearlyContribution);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setYearlyCalculatedData(yearlyData);
    setInitialInvestment(userInput.currentSaving);
  };

  return (
    <div>
      <Header />
      <UserInput
        userInputData={userInputData}
        setUserInputData={setUserInputData}
        calculateHandler={calculateHandler}
      />
      <ResultTable
        yearlyCalculatedData={yearlyCalculatedData}
        initialInvestment={initialInvestment}
      />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
