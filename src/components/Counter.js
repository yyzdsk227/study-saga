import React from "react";

function Counter({ number, lotto, onincrease, ondecrease }) {
  return (
    <div>
      <h1
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        {lotto}
      </h1>
      {number !== 7 ? (
        <button
          style={{
            cursor: "pointer",
            border: "3px dotted skyblue",
            borderRadius: "1Rem",
            top: "8%",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%)",
          }}
          onClick={onincrease}
        >
          {number === 0
            ? `Lotto_시작합시다`
            : `${number}번째 숫자: Lotto_[${number - 1}]`}
        </button>
      ) : (
        <a
          href="/"
          style={{
            top: "8%",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          다시하기
        </a>
      )}
      {/* <button onClick={ondecrease}>-1</button> */}
    </div>
  );
}

export default Counter;
