import { authConstant } from "../actions/constants";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  authenticating: false,
  authenticated: false,
  error: null,
};
export default (state = initState, action) => {
  switch (action.type) {
    case `${authConstant.USER_LOGIN_REQUEST}`:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case `${authConstant.USER_LOGIN_SUCCESS}`:
      state = {
        ...state,
        ...action.payload.user,
        authenticated: true,
        authenticating: true,
      };
      break;
    case `${authConstant.USER_LOGIN_FAILURE}`:
      state = {
        ...state,
        authenticated: false,
        authenticating: false,
        error: action.payload.error,
      };
      break;
    default:
      state = {
        ...state,
      };
      break;
  }
  return state;
};