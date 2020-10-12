import React from "react";
import "./loadingSpiner.scss";
import loadingSpinner from "../../assets/loading.gif";

const LoadingSpiner = () => {
  return (
    <div className="spinner-container">
      <img src={loadingSpinner} alt="Loading..." />
    </div>
  );
};

export default LoadingSpiner;
