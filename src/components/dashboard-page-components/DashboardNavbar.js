import React from "react";

const DashboardNavbar = ({ setTab }) => {
  return (
    <div className="dashboard-navbar">
      <ul>
        <li onClick={() => setTab(false)}>Create Product</li>
        <li onClick={() => setTab(true)}>Edit/Delete Product</li>
      </ul>
    </div>
  );
};

export default DashboardNavbar;
