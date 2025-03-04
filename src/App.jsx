import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (isOperator(value) && isOperator(input.slice(-1))) return;
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  const reset = () => setInput("");

  const isOperator = (char) => ["+", "-", "*", "/"].includes(char);

  return (
    <div className="calculator-wrapper">
      <Display value={input} />

      <div className="numbers-wrapper">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
          <Button key={num} value={num} onClick={handleClick} />
        ))}
      </div>

      <div className="special-row">
        <Button value="C" onClick={reset} />
        <Button value="=" onClick={calculate} />
        <Button value="0" onClick={handleClick} />
      </div>

      <div className="operator-row">
        {["+", "-", "*", "/"].map((op) => (
          <Button
            key={op}
            value={op}
            onClick={handleClick}
            className="operator"
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
