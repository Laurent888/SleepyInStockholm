import { combineReducers } from "redux";
import productReducer from "./product/productReducer";
import userReducer from "./user/userReducer";
import uiReducer from "./UI/uiReducer";

const RootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
  ui: uiReducer
});

export default RootReducer;
