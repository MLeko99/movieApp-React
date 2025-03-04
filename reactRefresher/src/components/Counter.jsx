import React, { useState } from "react";

const Counter = () => {

  const [brojac, setBrojac] = useState(0);

  const handleIncrement = () => {
    setBrojac(brojac + 1);
  };

  const handleDecrement = () => {
    if (brojac == 0) return;
    else setBrojac(brojac - 1);
  };

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <div>Counter: {brojac}</div>
      <button onClick={handleDecrement}>-</button>
    </>
  );

  
};

export default Counter;
