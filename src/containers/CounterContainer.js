import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increaseasync, decreaseasync } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  console.log(number);

  const onIncrease = () => {
    dispatch(increaseasync());
  };

  const onDecrease = () => {
    dispatch(decreaseasync());
  };

  return (
    <Counter number={number} onincrease={onIncrease} ondecrease={onDecrease} />
  );
};

export default CounterContainer;
