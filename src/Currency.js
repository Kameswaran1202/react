import React, { useState } from 'react';

const Conversion = () => {
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const FromCurrencyChange = (currency) => {
    setFromCurrency(currency.target.value);
  };

  const ToCurrencyChange = (currency) => {
    setToCurrency(currency.target.value);
  };

  const FromAmountChange = (currency) => {
    setFromAmount(currency.target.value);
  };

  const handleConvertClick = () => {
    const rates = {
      INR: 1,
      USD: 0.014,
      EURO: 0.012
    };
    const rate = rates[toCurrency] / rates[fromCurrency];
    const convertedAmount = (fromAmount * rate).toFixed(3);
    setToAmount(convertedAmount);
  };

  return (
    <div>
      <div>
        <select value={fromCurrency} onChange={FromCurrencyChange}>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EURO">EURO</option>
        </select>
        <input type="number" value={fromAmount} onChange={FromAmountChange} />
      </div>
      <div>
        <select value={toCurrency} onChange={ToCurrencyChange}>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EURO">EURO</option>
        </select>
        <input type="number" value={toAmount} readOnly />
      </div>
      <button onClick={handleConvertClick}>Convert</button>
    </div>
  );
};

export default Conversion;
