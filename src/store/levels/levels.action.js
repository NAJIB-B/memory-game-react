import { LEVELS_ACTION_TYPES } from "./levels.types";
import { createAction } from "../../utils/reducer/reducer.utils";
export const setUserLevels = (value) => {
  return createAction(LEVELS_ACTION_TYPES.SET_USER_LEVELS, value);
};
