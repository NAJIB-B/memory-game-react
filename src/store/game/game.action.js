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
export const setImagesState = (value) => {
  return createAction(GAME_ACTION_TYPES.SET_IMAGES_STATE, value);
};
export const setIdOfSelected = (value) => {
  return createAction(GAME_ACTION_TYPES.ID_OF_SELECTED, value);
};
export const changeGameState = (state) => {
  return createAction(GAME_ACTION_TYPES.GAME_STATE, state);
};
export const setLevelStar = (value) => {
  return createAction(GAME_ACTION_TYPES.LEVEL_STAR, value);
};

export const resetShowingArray = (value) => {
  return createAction(GAME_ACTION_TYPES.RESET_SHOWING_ARRAY, value);
};
export const resetmatchedImages = (value) => {
  return createAction(GAME_ACTION_TYPES.RESET_MATCHED_IMAGES, value);
};
export const addItemToShowingArray = (item) => {
  return createAction(GAME_ACTION_TYPES.ADD_ITEM_TO_SHOWING_ARRAY, item);
};
export const addItemToMatchedImages = (item) => {
  return createAction(GAME_ACTION_TYPES.MATCHED_IMAGES, item);
};
export const removeItemFromShowingArray = (item) => {
  return createAction(GAME_ACTION_TYPES.REMOVE_ITEM_FROM_SHOWING_ARRAY, item);
};
