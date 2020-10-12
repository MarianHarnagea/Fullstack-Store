import axios from "axios";
import { loadOrders } from "../actions/ordersActions";
import { loadCart } from "../actions/cartActions";

export const CART_PRODUCTS = "CART_PRODUCTS";
export const PERSONAL_INFO = "PERSONAL_INFO";
export const CONFIRMED_ORDER = "CONFIRMED_ORDER";

export const loadCheckoutProducts = () => (dispatch, getState) => {
  dispatch({
    type: CART_PRODUCTS,
    payload: getState().cart,
  });
};

export const getPersonalInfo = (userInfo) => (dispatch) => {
  dispatch({
    type: PERSONAL_INFO,
    payload: userInfo,
  });
};

export const orderSuccesfull = () => (dispatch, getState) => {
  const orderInfo = getState().checkout;
  axios
    .post("http://localhost:5000/orders", orderInfo)
    .then(
      dispatch({
        type: CONFIRMED_ORDER,
      }),
      dispatch(loadOrders()),
      dispatch(loadCart())
    )
    .catch((err) => console.log(err));
};
