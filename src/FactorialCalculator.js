import React, { useState, useMemo } from 'react';

const FactorialCalculator = () => {
  const [number, setNumber] = useState(1);

  // Function to calculate factorial
  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  // Use useMemo to memoize the factorial calculation
  const memoizedFactorial = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        min="0"
      />
      <p>The factorial of {number} is {memoizedFactorial}</p>
    </div>
  );
};

export default FactorialCalculator;
