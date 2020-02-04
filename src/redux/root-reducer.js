import { combineReducers } from "redux";
import productReducer from "./product/productReducer";
import userReducer from "./user/userReducer";

const RootReducer = combineReducers({
  products: productReducer,
  user: userReducer
});

export default RootReducer;
