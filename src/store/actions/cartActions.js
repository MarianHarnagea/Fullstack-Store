import { loadCheckoutProducts } from "./checkoutActions";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const LOAD_CART = "LOAD_CART";

export const loadCart = () => (dispatch) => {
  dispatch({ type: LOAD_CART });
};

export const addProduct = (product) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
    dispatch(loadCart());
    dispatch(loadCheckoutProducts());
  }, 500);
};

export const removeProduct = (product) => (dispatch, getState) => {
  setTimeout(() => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: { product, products: getState().products.products },
    });
    dispatch(loadCart());
    dispatch(loadCheckoutProducts());
  }, 500);
};
