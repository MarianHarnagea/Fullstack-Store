import {
  FETCH_USER_ERROR,
  LOGIN_ERROR,
  REGISTER_ERROR,
} from "../actions/errorsActions";

import { CREAR_ERRORS } from "../actions/errorsActions";

const initState = {
  errors: null,
  loginErrors: null,
  registerErrors: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginErrors: action.payload,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        registerErrors: action.payload,
      };
    case CREAR_ERRORS:
      return {
        ...state,
        errors: null,
        loginErrors: null,
        registerErrors: null,
      };
    default:
      return state;
  }
};
