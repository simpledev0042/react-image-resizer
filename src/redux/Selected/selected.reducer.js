import { SET_SELECTED } from "./selected.types";

const INITIAL_STATE = {
  selected: 0,
};

const selectedReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SELECTED:
      return {
        ...state,
        selected: payload,
      };

    default:
      return state;
  }
};

export default selectedReducer;
