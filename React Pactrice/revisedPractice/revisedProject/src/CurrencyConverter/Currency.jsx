import React, { useEffect, useState, useRef } from "react";
import "./Currency.css";

export default function Currency() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [pulse, setPulse] = useState(false);
  const prevAmountRef = useRef();

  useEffect(function () {
    async function getCurrencies() {
      const response = await fetch(`https://api.frankfurter.dev/v1/currencies`);
      const data = await response.json();
      console.log(data);
      const myobject = Object.keys(data);
      console.log(myobject);
      setCurrencies(() => myobject);
    }

    getCurrencies();
  }, []);

  useEffect(
    function () {
      async function convertAmount() {
        const response = await fetch(
          `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`
        );
        const data = await response.json();
        const newAmount = (amount * data.rates[to]).toFixed(2);
        setConvertedAmount(newAmount);
      }

      convertAmount();
    },
    [amount, from, to]
  );

  // Pulse animation when converted amount changes
  useEffect(() => {
    const prev = prevAmountRef.current;
    if (prev !== undefined && prev !== String(convertedAmount)) {
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 420);
      return () => clearTimeout(t);
    }
    prevAmountRef.current = String(convertedAmount);
  }, [convertedAmount]);

  return (
    <div className="currency-app">
      <div className="card">
        <h1 className="title">Currency Converter</h1>

        <div className="controls">
          <input
            className="input amount"
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            className="select"
            name="from"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>

          <select
            className="select"
            name="to"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="result">
          <p className={`converted ${pulse ? "pulse" : ""}`}>
            {convertedAmount} <span className="currency-label">{to}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
