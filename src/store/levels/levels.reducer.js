import { LEVELS_ACTION_TYPES } from "./levels.types";
const INITIAL_STATE = {
  levels: null,
};

export const levelsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LEVELS_ACTION_TYPES.SET_USER_LEVELS:
      return { ...state, levels: payload };

    default:
      return state;
  }
};
