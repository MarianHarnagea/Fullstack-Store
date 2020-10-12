import { FETCHING_ORDERS, FETCHED_ORDERS } from "../actions/ordersActions";

const initState = {
  orders: [],
  loadingOrders: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCHING_ORDERS:
      return {
        ...state,
        loadingOrders: true,
      };
    case FETCHED_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loadingOrders: false,
      };

    default:
      return state;
  }
};
