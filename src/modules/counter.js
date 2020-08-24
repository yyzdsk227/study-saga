const increasea = "increasea";
const decreasea = "decreasea";

export const increase = () => ({ type: increasea });
export const decrease = () => ({ type: decreasea });

export const increaseasync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseasync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialstate = 0;

const counter = (state = initialstate, action) => {
  switch (action.type) {
    case increasea:
      return state + 1;
    case decreasea:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
