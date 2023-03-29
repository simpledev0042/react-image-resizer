import { SET_SELECTED_IMAGES } from "./selected.images.types";

export const setSelectedImages = (payload) => {
  return {
    type: SET_SELECTED_IMAGES,
    payload,
  };
};
