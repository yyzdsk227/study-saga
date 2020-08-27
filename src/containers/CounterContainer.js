import React, { memo } from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increaseasync, decreaseasync } from "../modules/counter";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const CounterContainer = memo(() => {
  console.log(useSelector((state) => state.counter));
  const counterCtr = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  // console.log(number);

  const onIncrease = () => {
    dispatch(increaseasync());
  };

  const onDecrease = () => {
    dispatch(decreaseasync());
  };

  return (
    <div>
      <Counter
        number={counterCtr.number}
        lotto7={counterCtr.lotto7}
        lotto={
          counterCtr.loading === true ? (
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={4}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    /* This is important to include, because if you're fully managing the
             animation yourself, you'll want to disable the CSS animation. */
                    styles={buildStyles({ pathTransition: "none" })}
                  />
                );
              }}
            </AnimatedProgressProvider>
          ) : counterCtr.number === 0 ? (
            0
          ) : (
            counterCtr.lotto7[counterCtr.number - 1]
          )
        }
        onincrease={onIncrease}
        ondecrease={onDecrease}
      />
    </div>
  );
});

export default CounterContainer;
