import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";
export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
export const setUid = (value) => {
  return createAction(USER_ACTION_TYPES.SET_UID, value);
};
export const setLoading = (value) => {
  return createAction(USER_ACTION_TYPES.SET_LOADING, value);
};
