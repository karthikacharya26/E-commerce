import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
