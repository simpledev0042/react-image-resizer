import { SET_SELECTED } from "./selected.types";

export const setSelected = (payload) => {
  return {
    type: SET_SELECTED,
    payload,
  };
};
