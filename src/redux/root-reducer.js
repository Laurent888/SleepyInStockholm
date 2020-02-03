import { combineReducers } from "redux";
import productReducer from "./product/productReducer";

const RootReducer = combineReducers({
  products: productReducer
});

export default RootReducer;
