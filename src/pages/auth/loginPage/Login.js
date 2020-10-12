import React, { useState } from "react";
import "./login.scss";
import Header from "../../../components/headers/Header";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/actions/authActions";

const Login = () => {
  const errors = useSelector((state) => state.errors.loginErrors);
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginValues));
  };

  return (
    <div className="login-page-container">
      <Header title="Login" />

      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="alert">
            {errors ? (
              <h5>{errors.msg}</h5>
            ) : (
              <h5>Please enter your e-mail and password:</h5>
            )}
          </div>
          <input
            type="text"
            placeholder="Email"
            value={loginValues.email}
            onChange={(e) =>
              setLoginValues({ ...loginValues, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={loginValues.password}
            onChange={(e) =>
              setLoginValues({ ...loginValues, password: e.target.value })
            }
          />
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
