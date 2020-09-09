import React from "react";
import "./register.scss";
import Header from "../../../components/headers/Header";

const Register = () => {
  return (
    <div className="register-page-container">
      <Header title="Register" />

      <div className="register-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="alert">
            <h5>Please enter information to create your account:</h5>
          </div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="register-btn-container">
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
