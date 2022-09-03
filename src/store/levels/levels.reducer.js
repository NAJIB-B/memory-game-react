import { LEVELS_ACTION_TYPES } from "./levels.types";
const INITIAL_STATE = {
  levels: null,
  spinner: false,
};

export const levelsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LEVELS_ACTION_TYPES.SET_USER_LEVELS:
      return { ...state, levels: payload };
    case LEVELS_ACTION_TYPES.SET_SPINNER:
      return { ...state, spinner: payload };

    default:
      return state;
  }
};
