import { createAction } from "../../utils/reducer/reducer.utils";
import { GAME_ACTION_TYPES } from "./game.types";

const increaseMoves = (moves) => {
  console.log(moves++);
  return moves++;
};

export const incrementCounter = (moves) => {
  const newValue = increaseMoves(moves);
  return createAction(GAME_ACTION_TYPES.INCREMENT_COUNTER, newValue);
};
export const resetCounter = (value) => {
  return createAction(GAME_ACTION_TYPES.INCREMENT_COUNTER, value);
};
export const changeGameState = (state) => {
  return createAction(GAME_ACTION_TYPES.GAME_STATE, state);
};
export const setCurrentImg = (value) => {
  return createAction(GAME_ACTION_TYPES.SET_CURRENT_IMAGE, value);
};
export const resetShowingArray = (value) => {
    return createAction(GAME_ACTION_TYPES.RESET_SHOWING_ARRAY, value);
  };
export const addItemToShowingArray = (item) => {
  return createAction(GAME_ACTION_TYPES.ADD_ITEM_TO_SHOWING_ARRAY, item);
};
export const removeItemFromShowingArray = (item) => {
  return createAction(GAME_ACTION_TYPES.REMOVE_ITEM_FROM_SHOWING_ARRAY, item);
};