function Button({ buttonText, state, dispatch }) {
  const isOpenButton = buttonText === "Open Account";
  const isDepositButton = buttonText.includes("Deposit");
  const isWithdrawButton = buttonText.includes("Withdraw");
  const isLoanButton = buttonText.includes("Request a loan");
  const isPayLoanButton = buttonText.includes("Pay loan");
  const isClosedButton = buttonText.includes("Close");

  const conditionForDisableButton =
    isOpenButton && !state.isOpen
      ? false
      : isOpenButton && state.isOpen
      ? true
      : (!isOpenButton && !state.isOpen) ||
        (isWithdrawButton && !state.balance) ||
        (isPayLoanButton && !state.loan) ||
        (isLoanButton && state.loan) ||
        (isClosedButton && state.loan)
      ? true
      : false;

  return (
    <button
      className="btn"
      disabled={conditionForDisableButton}
      onClick={() => {
        isOpenButton ? dispatch({ type: "openAccount" }) : "";
        isDepositButton ? dispatch({ type: "depositAccount" }) : "";
        isWithdrawButton ? dispatch({ type: "withdrawAccount" }) : "";
        isLoanButton ? dispatch({ type: "requestLoan" }) : "";
        isPayLoanButton ? dispatch({ type: "payLoan" }) : "";
        isClosedButton ? dispatch({ type: "closeAccount" }) : "";
      }}
    >
      {buttonText}
    </button>
  );
}

export default Button;
