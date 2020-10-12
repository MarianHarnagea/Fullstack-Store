import React from "react";

const DashboardNavbar = ({ tabs, setTabs }) => {
  return (
    <div className="dashboard-navbar">
      <ul>
        <li onClick={() => setTabs(1)}>Create Product</li>
        <li onClick={() => setTabs(2)}>Edit/Delete Product</li>
        <li onClick={() => setTabs(3)}>Manage Orders</li>
      </ul>
    </div>
  );
};

export default DashboardNavbar;
