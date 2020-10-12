import React, { useState } from "react";
import "./register.scss";
import Header from "../../../components/headers/Header";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../store/actions/authActions";

const Register = () => {
  const errors = useSelector(({ errors }) => errors.registerErrors);

  const [registerValues, setRegisterValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleRegistration = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerValues));
  };

  return (
    <div className="register-page-container">
      <Header title="Register" />

      <div className="register-form">
        <form onSubmit={handleRegistration}>
          <div className="alert">
            {errors ? (
              <h5>{errors.msg}</h5>
            ) : (
              <h5>Please enter your information to create your account:</h5>
            )}
          </div>
          <input
            type="text"
            placeholder="First Name"
            value={registerValues.firstname}
            onChange={(e) =>
              setRegisterValues({
                ...registerValues,
                firstname: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            value={registerValues.lastname}
            onChange={(e) =>
              setRegisterValues({ ...registerValues, lastname: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Email"
            value={registerValues.email}
            onChange={(e) =>
              setRegisterValues({ ...registerValues, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={registerValues.password}
            onChange={(e) =>
              setRegisterValues({ ...registerValues, password: e.target.value })
            }
          />
          <div className="register-btn-container">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
