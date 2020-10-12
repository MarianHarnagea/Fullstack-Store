import React from "react";
import "./cart.scss";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

// REDUX
import { useSelector } from "react-redux";

const Cart = ({ cart, handleCloseAll }) => {
  const state = useSelector((state) => state.cart);

  return (
    <div className={cart ? "cart-container open-cart" : "cart-container"}>
      <div className="inner-container">
        <div className="cart-products-container">
          {state.cart !== null ? (
            state.cart.map((product) => (
              <CartProduct
                product={product}
                key={product._id}
                handleCloseAll={handleCloseAll}
              />
            ))
          ) : (
            <p className="no-products text-center">No products in cart</p>
          )}
        </div>

        <div className="cart-checkout-container">
          <div className="total">
            <h3>Total:</h3>
            <h4>$ {state.total !== undefined ? state.total.toFixed(2) : 0}</h4>
          </div>
          <div className="checkout py-3">
            <Link to="/checkout" onClick={handleCloseAll}>
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
