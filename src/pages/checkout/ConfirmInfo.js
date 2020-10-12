import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../components/checkout/Product";
import Header from "../../components/headers/Header";

import { useSelector } from "react-redux";

const ConfirmInfo = ({ setStep, cart, personalInfo, completeOrder }) => {
  const [expandSummary, setExpandSummary] = useState(false);
  const total = useSelector(({ cart }) => cart.total);
  const handleExpandSummary = () => {
    setExpandSummary(!expandSummary);
  };

  return (
    <div className="checkout-page">
      <Header title="Confirm" />
      <div className="order-summary my-3">
        <div className="inner-container">
          <p onClick={handleExpandSummary}>
            <span>
              <svg
                width="20"
                height="19"
                xmlns="http://www.w3.org/2000/svg"
                className="order-summary-toggle__icon"
              >
                <path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"></path>
              </svg>
            </span>
            Order Summary{" "}
            <span>
              <svg
                width="11"
                height="6"
                xmlns="http://www.w3.org/2000/svg"
                className="order-summary-toggle__dropdown"
                fill="#000"
              >
                <path d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z"></path>
              </svg>
            </span>
          </p>
          <h5>Total: $ {total.toFixed(2)}</h5>
        </div>

        <div
          className={
            expandSummary ? "summary-products show-summary" : "summary-products"
          }
        >
          {cart.cart.length > 0 ? (
            cart.cart.map((product) => (
              <Product key={product._id} product={product} />
            ))
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
      </div>
      <div className="user-info">
        <ul>
          <li>First Name: {personalInfo.firstName} </li>
          <li>Last Name: {personalInfo.lastName} </li>
          <li>Email: {personalInfo.email} </li>
          <li>Phone Number: {personalInfo.phoneNumber} </li>
          <li>Address: {personalInfo.address} </li>
          <li>City: {personalInfo.city} </li>
          <li>Postal Code: {personalInfo.postalCode} </li>
          <li>Country: {personalInfo.country} </li>
        </ul>
      </div>
      <div className="checkout-btns">
        <button onClick={() => setStep(2)}>Back</button>
        <button onClick={() => completeOrder()}>Finish Order</button>
      </div>
    </div>
  );
};

export default ConfirmInfo;
