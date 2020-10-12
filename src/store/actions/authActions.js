import axios from "axios";
import {
  clearErrors,
  FETCH_USER_ERROR,
  LOGIN_ERROR,
  REGISTER_ERROR,
} from "./errorsActions";

export const FETCH_USER = "FETCH_USER";
export const FETCHED_USER = "FETCHED_USER";
export const REGISTER_SUCCESFUL = "REGISTER_SUCCESFUL";
export const LOGIN_SUCCESFUL = "LOGIN_SUCCESFUL";
export const LOGOUT_SUCCESFUL = "LOGOUT_SUCCESFUL";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const fetchUser = () => (dispatch, getState) => {
  dispatch({ type: FETCH_USER });

  axios
    .get("http://localhost:5000/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: FETCHED_USER,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: FETCH_USER_ERROR,
        payload: err.response.data,
      });
      dispatch(logout());
    });
};

export const registerUser = ({ firstname, lastname, email, password }) => (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const userCredentials = JSON.stringify({
    firstname,
    lastname,
    email,
    password,
  });

  axios
    .post("http://localhost:5000/auth/register", userCredentials, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESFUL,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_ERROR,
        payload: err.response.data,
      });
      dispatch(clearErrors());
    });
};

export const loginUser = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const loginCredentials = JSON.stringify({
    email,
    password,
  });

  axios
    .post("http://localhost:5000/auth/login", loginCredentials, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESFUL,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response.data,
      });
      dispatch(clearErrors());
    });
};

export const logout = () => {
  clearErrors();
  return {
    type: LOGOUT_SUCCESFUL,
  };
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
