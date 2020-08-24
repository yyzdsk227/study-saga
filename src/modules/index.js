import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./posts";

const rootreducer = combineReducers({ counter, posts });

export default rootreducer;
