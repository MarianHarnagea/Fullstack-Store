export const CREAR_ERRORS = "CREAR_ERRORS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const clearErrors = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: CREAR_ERRORS,
    });
  }, 2500);
};
