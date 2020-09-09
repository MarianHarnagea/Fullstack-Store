import React from "react";
import "./cart.scss";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

const Cart = ({ cart }) => {
  return (
    <div className={cart ? "cart-container open-cart" : "cart-container"}>
      <div className="inner-container">
        <div className="cart-products-container">
          <CartProduct />
        </div>

        <div className="cart-checkout-container">
          <div className="total">
            <h3>Total:</h3>
            <h4>$ 99</h4>
          </div>
          <div className="checkout py-3">
            <button>
              <Link to="/">Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
