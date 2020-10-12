import React, { useState } from "react";
import Header from "../../headers/Header";
// import LoadingSpiner from "../../spinner/LoadingSpiner";
import { Link } from "react-router-dom";

// REDUX
import { useDispatch } from "react-redux";
import { deleteOrder, editOrder } from "../../../store/actions/ordersActions";

const OrderDetails = ({ setOrderModal, order }) => {
  const [changeOrderStatus, setChangeOrderStatus] = useState("pending");

  const capitalizeFirstLetter = (str) => {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
  };

  const handleDeleteOrder = () => {
    dispatch(deleteOrder(order._id));
    setOrderModal(false);
  };

  const dispatch = useDispatch();

  return (
    <div className="order-modal">
      <div className="order-modal-container">
        <Header title="Order Details" />
        <button
          className="close-modal-btn mb-3"
          onClick={() => setOrderModal(false)}
        >
          Close
        </button>

        <div className="row p-4">
          <div className="col-12 col-md-6 ">
            <div className="order-info">
              <div className="change-status mx-auto my-3">
                <label htmlFor="status">Change order status:</label>

                <select
                  onChange={(e) => setChangeOrderStatus(e.target.value)}
                  name="status"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="sent">Sent</option>
                  <option value="canceled">Canceled</option>
                </select>
                <button
                  onClick={() =>
                    dispatch(editOrder(order._id, changeOrderStatus))
                  }
                >
                  Change
                </button>
              </div>
              <ul>
                <li style={{ fontWeight: "600", fontSize: "18px" }}>
                  Order Status: {order.orderStatus.toUpperCase()}
                </li>
                <li>First Name: {capitalizeFirstLetter(order.firstName)}</li>
                <li>Last Name: {capitalizeFirstLetter(order.lastName)}</li>
                <li>Email: {order.email}</li>
                <li>Phone Number: {order.phoneNumber}</li>
                <li>Address: {capitalizeFirstLetter(order.address)}</li>
                <li>City: {capitalizeFirstLetter(order.city)}</li>
                <li>Postal Code: {order.postalCode}</li>
                <li>Country: {capitalizeFirstLetter(order.country)}</li>
              </ul>
              <h4>Total Price: ${order.totalPrice}</h4>
            </div>

            <div className="delete-order mt-4">
              <label htmlFor="delete">Delete order:</label>
              <button onClick={handleDeleteOrder}>Delete</button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="order-products-images">
              {order.orderedProducts.map((product) => (
                <div key={product._id} className="product">
                  <h6>
                    Product Name: <span>{product.title}</span>{" "}
                  </h6>
                  <h6>
                    Product Category: <span>{product.category}</span>{" "}
                  </h6>
                  <h6>
                    Quantity: <span>{product.quantity}</span>{" "}
                  </h6>
                  <Link to={`/collection/product/${product._id}`}>
                    <img src={product.product_image} alt="" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
