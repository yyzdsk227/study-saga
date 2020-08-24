import React from "react";

function Counter({ number, onincrease, ondecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onincrease}>+1</button>
      <button onClick={ondecrease}>-1</button>
    </div>
  );
}

export default Counter;
