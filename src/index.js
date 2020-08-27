import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootreducer, { rootSaga } from "./modules/index";
// import mylogger from "./middleware/mylogger";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { Router } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

const customhistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customhistory,
  },
});

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router history={customhistory}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
