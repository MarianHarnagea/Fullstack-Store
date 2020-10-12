import React from "react";
import Product from "../../components/checkout/Product";
import Header from "../../components/headers/Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = ({ cart, setStep }) => {
  const total = useSelector((state) => state.cart.total);

  return (
    <div className="checkout-page">
      <Header title="CheckOut" />
      {cart.cart ? (
        <>
          <div className="container">
            <div className="row d-none d-sm-flex">
              <div className="col-4">Product</div>
              <div className="col-2">Price</div>
              <div className="col-2">Quantity</div>
              <div className="col-2">Subtotal</div>
            </div>
            <div className="checkout-products">
              {cart.cart.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
          <div className="container checkout-total">
            <h3>Total: $ {total.toFixed(2)}</h3>
            <div className="checkout-btns">
              <button onClick={() => setStep(2)}>Continue</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="no-products text-center">Cart is empty,</p>
          <p className="no-products text-center">add some products</p>
          <div className="checkout-btns">
            <Link to="/collection/all">To Shop</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
