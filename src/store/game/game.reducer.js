import { GAME_ACTION_TYPES } from "./game.types";
const INITIAL_STATE = {
  movesCounter: 0,
  gameState: false,
  currentImg: null,
  showingArray: [],
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GAME_ACTION_TYPES.INCREMENT_COUNTER:
      return { ...state, movesCounter: payload };
    case GAME_ACTION_TYPES.RESET_COUNTER:
      return { ...state, movesCounter: payload };

    case GAME_ACTION_TYPES.GAME_STATE:
      return { ...state, gameState: payload };
    case GAME_ACTION_TYPES.SET_CURRENT_IMAGE:
      return { ...state, currentImg: payload };
    case GAME_ACTION_TYPES.RESET_SHOWING_ARRAY:
      return { ...state, showingArray: payload };
    case GAME_ACTION_TYPES.ADD_ITEM_TO_SHOWING_ARRAY:
      return { ...state, showingArray: [...state.showingArray, payload] };
    case GAME_ACTION_TYPES.REMOVE_ITEM_FROM_SHOWING_ARRAY:
      return {
        ...state,
        showingArray: state.showingArray.filter((item) => payload !== item),
      };

    default:
      return state;
  }
};
