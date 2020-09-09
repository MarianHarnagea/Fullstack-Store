import React, { useState } from "react";
import DashboardNavbar from "../../components/dashboard-page-components/DashboardNavbar";
import "./dashboard.scss";
import CreateProduct from "../../components/dashboard-page-components/CreateProduct";
import DeleteProduct from "../../components/dashboard-page-components/DeleteProduct";

const Dashboard = () => {
  const [tab, setTab] = useState(false);

  return (
    <div className="container">
      <DashboardNavbar setTab={setTab} />
      {tab ? <DeleteProduct /> : <CreateProduct />}
    </div>
  );
};

export default Dashboard;
