import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { removeBooking } from "../sagas/saga";

// REDUX DEV TOOLS
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// CREATE REDUX SAGA
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  RootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

// then run the saga
sagaMiddleware.run(removeBooking);

export default store;
