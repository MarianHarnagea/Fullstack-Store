import React from "react";
import Header from "../../headers/Header";
import Order from "./Order";

import { useSelector } from "react-redux";

const ManageOrders = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div className="manage-orders-tab">
      <Header title="Orders" />
      <div className="row">
        {orders.length > 0 ? (
          orders.map((order) => <Order key={order._id} order={order} />)
        ) : (
          <Header title="Loading ..." />
        )}
      </div>
    </div>
  );
};

export default ManageOrders;
