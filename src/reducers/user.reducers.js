import { userConstant } from "../actions/constants";

const initState = {
  users: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case `${userConstant.GET_REALTIMEUSERS}_REQUEST`:
      break;
    case `${userConstant.GET_REALTIMEUSERS}_SUCCESS`:
      state = {
        ...state,
        users: action.payload.users,
      };
      break;
    case `${userConstant.GET_REALTIMEUSERS}_FAILURE`:
      break;
    default:
      break;
  }
  return state;
};
