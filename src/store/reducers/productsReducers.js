import {
  FETCHING_PRODUCTS,
  FETCHED_PRODUCTS,
  ERROR_FETCH,
  CREATE_PRODUCT,
  GET_PRODUCT_ID,
} from "../actions/productsActions";

const initState = {
  loading: false,
  error: null,
  products: [],
  createdProduct: undefined,
  productId: undefined,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR_FETCH:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCHED_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        createdProduct: action.payload,
      };
    case GET_PRODUCT_ID:
      return {
        ...state,
        productId: action.payload,
      };
    default:
      return state;
  }
};
