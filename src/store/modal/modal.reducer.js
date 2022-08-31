import { MODAL_ACTION_TYPES } from "./modal.types";

const INITIAL_STATE = {
  modal: false,
};

export const modalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL_ACTION_TYPES.SET_MODAL:
      return { ...state, modal: payload };

    default:
      return state;
  }
};
