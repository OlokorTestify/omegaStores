import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";

const middlewares = [thunk];

if (process.env.REACT_APP_NODE_ENV !== "production") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
