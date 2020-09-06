import { userConstant } from "../actions/constants";

const intiState = {
  users: [],
  conversations: [],
};

export default (state = intiState, action) => {
  switch (action.type) {
    case `${userConstant.GET_REALTIMEUSERS}_REQUEST`:
      break;
    case `${userConstant.GET_REALTIMEUSERS}_SUCCESS`:
      state = {
        ...state,
        users: action.payload.users,
      };
      break;
    case userConstant.GET_REALTIME_MESSAGES:
      state = {
        ...state,
        conversations: action.payload.conversations,
      };
      break;
    case `${userConstant.GET_REALTIME_MESSAGES}_FAILURE`:
      state = {
        ...state,
        conversations: [],
      };
      break;
  }
  return state;
};
