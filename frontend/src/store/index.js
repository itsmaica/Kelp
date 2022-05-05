import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import sessionReducer from './session';
import beachReducer from "./beaches";
import userBeachesReducer from "./userBeaches";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  beaches: beachReducer,
  userBeaches : userBeachesReducer

});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};




export default configureStore;
