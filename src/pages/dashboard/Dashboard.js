import React, { useState } from "react";
import "./dashboard.scss";

// COMPONENTS
import DashboardNavbar from "../../components/dashboard-page-components/DashboardNavbar";
import CreateProduct from "../../components/dashboard-page-components/CreateProduct";
import DeleteProduct from "../../components/dashboard-page-components/DeleteProduct";
import ManageOrders from "../../components/dashboard-page-components/manageOrders/ManageOrders";

const Dashboard = () => {
  const [tabs, setTabs] = useState(1);

  switch (tabs) {
    case 1:
      return (
        <div className="container">
          <DashboardNavbar tabs={tabs} setTabs={setTabs} />
          <CreateProduct />
        </div>
      );
    case 2:
      return (
        <div className="container">
          <DashboardNavbar tabs={tabs} setTabs={setTabs} />
          <DeleteProduct />
        </div>
      );
    case 3:
      return (
        <div className="container">
          <DashboardNavbar tabs={tabs} setTabs={setTabs} />
          <ManageOrders />
        </div>
      );

    default:
      break;
  }
};

export default Dashboard;
