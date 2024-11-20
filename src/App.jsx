import "./index.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  const handleClickNumber = (number) => {
    if (num1 === null) {
      setNum1(number);
    } else {
      setNum2(number);
    }
  };

  const calculate = () => {
    if (num1 === null || num2 === null || !operator) return;

    if (operator === "+") {
      setResult(num1 + num2);
    } else if (operator === "-") {
      setResult(num1 - num2);
    } else if (operator === "*") {
      setResult(num1 * num2);
    } else if (operator === "/") {
      setResult(num1 / num2);
    }
  };

  const reset = () => {
    setNum1(null);
    setNum2(null);
    setOperator(null);
    setResult(null);
  };

  return (
    <>
      <div className="calculator-wrapper">
        <div className="calculator-preview">
          {num1}
          {operator}
          {num2} {result ? "=" + result : ""}
        </div>
        <div className="numbers-wrapper">
          <div className="number" onClick={() => handleClickNumber(1)}>
            1
          </div>
          <div className="number" onClick={() => handleClickNumber(2)}>
            2
          </div>
          <div className="number" onClick={() => handleClickNumber(3)}>
            3
          </div>
          <div className="number" onClick={() => handleClickNumber(4)}>
            4
          </div>
          <div className="number" onClick={() => handleClickNumber(5)}>
            5
          </div>
          <div className="number" onClick={() => handleClickNumber(6)}>
            6
          </div>
          <div className="number" onClick={() => handleClickNumber(7)}>
            7
          </div>
          <div className="number" onClick={() => handleClickNumber(8)}>
            8
          </div>
          <div className="number" onClick={() => handleClickNumber(9)}>
            9
          </div>
          <div className="number" onClick={() => reset}>
            C
          </div>
          <div className="number" onClick={() => handleClickNumber(0)}>
            0
          </div>
          <div className="number" onClick={() => calculate()}>
            =
          </div>
        </div>
        <div className="operators-wrapper">
          <div className="operator" onClick={() => setOperator("+")}>
            +
          </div>
          <div className="operator" onClick={() => setOperator("-")}>
            -
          </div>
          <div className="operator" onClick={() => setOperator("*")}>
            *
          </div>
          <div className="operator" onClick={() => setOperator("/")}>
            /
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
