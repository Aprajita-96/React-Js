import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import logger from 'redux-logger'

import { reducer } from "./ducks";
import { watcherSaga } from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
   </React.StrictMode>,
  </Provider>,
  document.getElementById("root")
);


// npm install  axios  react-redux  redux  redux-logger  redux-saga
//1.axios-jquery( to make the server call)
//2.react-redux -- better way of having redux
//3.redux-logger --- log the store records
//4.redux-saga
