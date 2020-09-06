import { userConstant } from "../actions/constants";

const initState = {
  users: [],
  conversations: [],
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
    case userConstant.GET_REALTIMEMESSAGES:
      state = {
        ...state,
        conversations: action.payload.conversations,
      };
      break;
    case `${userConstant.GET_REALTIMEMESSAGES}_FAILURE`:
      state = {
        ...state,
        conversations: [],
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
