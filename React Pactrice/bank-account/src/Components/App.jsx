import { useReducer } from "react";
import Button from "./Button.jsx";

const initialState = {
  balance: 0,
  loan: 0,
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        isOpen: true,
      };
    case "depositAccount":
      return {
        ...state,
        balance: state.balance + 150,
      };
    case "withdrawAccount":
      if (state.balance >= 50) {
        return {
          ...state,
          balance: state.balance - 50,
        };
      } else {
        alert("Insufficient funds");
        return state;
      }
    case "requestLoan":
      if (!state.loan) {
        return {
          ...state,
          loan: 5000,
          balance: state.balance + 5000,
        };
      } else {
        alert("You already have a loan");
        return state;
      }

    case "payLoan":
      if (state.loan <= state.balance) {
        return {
          ...state,
          balance: state.balance - state.loan,
          loan: 0,
        };
      } else if (state.loan > state.balance) {
        return {
          ...state,
          balance: 0,
          loan: state.loan - state.balance,
        };
      } else {
        alert("No loan to pay");
        return state;
      }
    case "closeAccount":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {state.isOpen ? state.balance : "X"}</p>
      <p>Loan: {state.isOpen ? state.loan : "X"}</p>
      <Button buttonText={"Open Account"} state={state} dispatch={dispatch} />
      <Button buttonText={"Deposit 150"} state={state} dispatch={dispatch} />
      <Button buttonText={"Withdraw 50"} state={state} dispatch={dispatch} />
      <Button
        buttonText={"Request a loan of 5000"}
        state={state}
        dispatch={dispatch}
      />
      <Button buttonText={"Pay loan"} state={state} dispatch={dispatch} />
      <Button buttonText={"Close Account"} state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
