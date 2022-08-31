import { createAction } from "../../utils/reducer/reducer.utils";
import { MODAL_ACTION_TYPES } from "./modal.types";
export const setModal = (value) => {
  return createAction(MODAL_ACTION_TYPES.SET_MODAL, value);
};
