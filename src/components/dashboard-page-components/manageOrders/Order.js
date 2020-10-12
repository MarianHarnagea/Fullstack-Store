import React, { useState } from "react";
import { Link } from "react-router-dom";

import OrderDetails from "./OrderDetails";

const Order = ({ order }) => {
  const [orderModal, setOrderModal] = useState(false);

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    totalPrice,
    orderStatus,
    orderedProducts,
  } = order;

  const capitalizeFirstLetter = (str) => {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
  };

  return (
    <>
      <div className="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
        <div className="order py-3 px-3">
          <h6 className="text-center">
            Order Status: {orderStatus.toUpperCase()}
          </h6>
          <div className="user-info text-center">
            <p>First Name: {capitalizeFirstLetter(firstName)}</p>
            <p>Last Name: {capitalizeFirstLetter(lastName)}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Number of Products: {orderedProducts.length}</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <div onClick={() => setOrderModal(true)} className="see-details">
            <Link to="#">See More Details</Link>
          </div>
        </div>
      </div>
      {orderModal ? (
        <OrderDetails setOrderModal={setOrderModal} order={order} />
      ) : (
        ""
      )}
    </>
  );
};

export default Order;
