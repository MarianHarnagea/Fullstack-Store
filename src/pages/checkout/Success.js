import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/headers/Header";

const Success = () => {
  return (
    <div className="checkout-page">
      <Header title="CheckOut" />
      <div className="checkout-success">
        <h5>Thank You For Your Order</h5>
        <h6>Your Order Will Be Get To You Soon </h6>
      </div>
      <div className="checkout-btns">
        <Link to="/"> Back to Home </Link>
      </div>
    </div>
  );
};

export default Success;
