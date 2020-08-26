import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import posts, { postSaga } from "./posts";
import { all } from "redux-saga/effects";

const rootreducer = combineReducers({ counter, posts });
console.log(rootSaga);

export function* rootSaga() {
  yield all([counterSaga(), postSaga()]);
}

export default rootreducer;
