import { USER_ACTION_TYPES } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  uid: null,
  loading: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SET_UID:
      return { ...state, uid: payload };
    case USER_ACTION_TYPES.SET_LOADING:
      return { ...state, loading: payload };

    default:
      return state;
  }
};
