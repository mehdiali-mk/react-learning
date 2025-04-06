import classes from "./ResultTable.module.css";

function ResultTable({ yearlyCalculatedData, initialInvestment }) {
  const formatCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  console.log(yearlyCalculatedData);

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyCalculatedData.map((yearData) => (
          <tr>
            <td>{yearData.year}</td>
            <td>{formatCurrency.format(yearData.savingsEndOfYear)}</td>
            <td>{formatCurrency.format(yearData.yearlyInterest)}</td>
            <td>
              {formatCurrency.format(
                yearData.savingsEndOfYear -
                  initialInvestment -
                  yearData.yearlyContribution * yearData.year
              )}
            </td>
            <td>
              {formatCurrency.format(
                initialInvestment + yearData.yearlyContribution * yearData.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;
