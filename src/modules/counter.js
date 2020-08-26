import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const increasea = "increasea";
const decreasea = "decreasea";
const increase_async = "increase_async";
const decrease_async = "decrease_async";

export const increase = () => ({ type: increasea });
export const decrease = () => ({ type: decreasea });

export const increaseasync = () => ({ type: increase_async });
export const decreaseasync = () => ({ type: decrease_async });

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(increase_async, increaseSaga);
  yield takeLatest(decrease_async, decreaseSaga);
}

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
