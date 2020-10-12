import { combineReducers } from "redux";
import productsReducers from "./productsReducers";
import authReducers from "./authReducers";
import errorsReducers from "./errorsReducers";
import cartReducers from "./cartReducers";
import checkoutReducers from "./checkoutReducers";
import ordersReducers from "./ordersReducers";

export default combineReducers({
  products: productsReducers,
  auth: authReducers,
  errors: errorsReducers,
  cart: cartReducers,
  checkout: checkoutReducers,
  orders: ordersReducers,
});
