import axios from "axios";

const URL = "https://express-store-server.herokuapp.com";

export const FETCHING_ORDERS = "FETCHING_ORDERS";
export const FETCHED_ORDERS = "FETCHED_ORDERS";

export const loadOrders = () => (dispatch) => {
  dispatch({
    type: FETCHING_ORDERS,
  });
  axios
    .get(`${URL}/orders`)
    .then((result) => {
      dispatch({
        type: FETCHED_ORDERS,
        payload: result.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteOrder = (id) => (dispatch, getState) => {
  axios
    .delete(`${URL}/orders/delete/${id}`, tokenConfig(getState))
    .then((result) => {
      dispatch(loadOrders());
    })
    .catch((err) => console.log(err));
};

export const editOrder = (orderId, orderStatus) => (dispatch, getState) => {
  const order = {
    id: orderId,
    status: orderStatus,
  };
  axios
    .put(`${URL}/orders/edit`, order, tokenConfig(getState))
    .then((result) => {
      dispatch(loadOrders());
    })
    .catch((err) => console.log(err));
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
