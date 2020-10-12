import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cartActions";

const initState = {
  cart: JSON.parse(localStorage.getItem("cart")),
  total: 0,
};

export default (state = initState, action) => {
  let newCart = [];
  let prices = [];
  let indexProduct;
  let productPrice;
  let totalSum;

  switch (action.type) {
    case LOAD_CART:
      if (localStorage.getItem("cart") !== null) {
        newCart = JSON.parse(localStorage.getItem("cart"));

        newCart.map((product) => {
          return prices.push(product.price);
        });

        totalSum = prices.reduce((totalSum, current) => totalSum + current, 0);
      }
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cart")),
        total: totalSum,
      };
    case ADD_PRODUCT:
      if (localStorage.getItem("cart") !== null) {
        newCart = JSON.parse(localStorage.getItem("cart"));

        indexProduct = newCart.findIndex(
          (product) => product._id === action.payload._id
        );

        if (indexProduct < 0) {
          newCart.push({ ...action.payload, quantity: 1 });
        } else {
          const updatedProduct = {
            ...newCart[indexProduct],
          };

          updatedProduct.quantity++;
          productPrice = action.payload.price * updatedProduct.quantity;

          updatedProduct.price = productPrice;

          newCart[indexProduct] = updatedProduct;
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        newCart.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(newCart));
      }

      newCart.map((product) => {
        return prices.push(product.price);
      });

      totalSum = prices.reduce((totalSum, current) => totalSum + current, 0);

      return {
        ...state,
        total: totalSum,
      };
    case REMOVE_PRODUCT:
      if (localStorage.getItem("cart") !== null) {
        newCart = JSON.parse(localStorage.getItem("cart"));

        indexProduct = newCart.findIndex(
          (product) => product._id === action.payload.product._id
        );

        const updatedProduct = {
          ...newCart[indexProduct],
        };

        updatedProduct.quantity--;

        let product = action.payload.products.filter(
          (product) => product._id === action.payload.product._id
        );
        let initPrice = product[0].price;

        productPrice = newCart[indexProduct].price - initPrice;

        updatedProduct.price = productPrice;

        if (updatedProduct.quantity <= 0) {
          newCart.splice(newCart[indexProduct], 1);
        } else {
          newCart[indexProduct] = updatedProduct;
        }

        let totalPrice = state.total;
        totalSum = totalPrice - initPrice;

        localStorage.setItem("cart", JSON.stringify(newCart));
      }

      return {
        ...state,
        total: totalSum,
      };

    default:
      return state;
  }
};
