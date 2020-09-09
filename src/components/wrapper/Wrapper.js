import React from "react";
import "./wrapper.scss";

const Wrapper = ({ wrapper, handleWrapperClose }) => {
  return (
    <div
      onClick={handleWrapperClose}
      className={
        wrapper ? "wrapper-container open-wrapper" : "wrapper-container"
      }
    ></div>
  );
};

export default Wrapper;
