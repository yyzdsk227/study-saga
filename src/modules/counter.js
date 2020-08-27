import { delay, put, takeLatest } from "redux-saga/effects";
import { getWinNumbers } from "../lib/lotto";

const loadinga = "loadinga";
const increasea = "increasea";
const decreasea = "decreasea";
const increase_async = "increase_async";
const decrease_async = "decrease_async";

export const loading = () => ({ type: loadinga });
export const increase = () => ({ type: increasea });
export const decrease = () => ({ type: decreasea });

export const increaseasync = () => ({ type: increase_async });
export const decreaseasync = () => ({ type: decrease_async });

function* increaseSaga() {
  yield put(loading());
  yield delay(4321);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeLatest(increase_async, increaseSaga);
  yield takeLatest(decrease_async, decreaseSaga);
}

const initialstate = {
  loading: false,
  number: 0,
  lotto7: getWinNumbers(),
};

const counter = (state = initialstate, action) => {
  switch (action.type) {
    case loadinga:
      return {
        ...state,
        loading: true,
      };

    case increasea:
      console.log(action);
      return {
        ...state,
        loading: false,
        number: state.number + 1,
      };
    case decreasea:
      return {
        ...state,
        loading: false,
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
