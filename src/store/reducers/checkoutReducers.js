import {
  CART_PRODUCTS,
  PERSONAL_INFO,
  CONFIRMED_ORDER,
} from "../actions/checkoutActions";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  city: "",
  postalCode: "",
  country: "",
  orderedProducts: [],
  totalPrice: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case CART_PRODUCTS:
      return {
        ...state,
        orderedProducts: action.payload.cart,
        totalPrice: action.payload.total,
      };
    case PERSONAL_INFO:
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        city,
        postalCode,
        country,
      } = action.payload;
      return {
        ...state,
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        city,
        postalCode,
        country,
      };
    case CONFIRMED_ORDER:
      localStorage.removeItem("cart");
      return {
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        orderedProducts: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};
