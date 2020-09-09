import React from "react";
import "./login.scss";
import Header from "../../../components/headers/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page-container">
      <Header title="Login" />

      <div className="login-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="alert">
            <h5>Please enter your e-mail and password:</h5>
          </div>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Link to="/login">
            <p>Forgot your password?</p>
          </Link>
          <div className="login-btn-container">
            <button type="submit">login</button>
          </div>
          <div className="register-link-container">
            <p>
              Don't have an account? <Link to="/register">Register</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
