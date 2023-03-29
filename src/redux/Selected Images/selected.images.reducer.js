import { SET_SELECTED_IMAGES } from "./selected.images.types";

const INITIAL_STATE = {
  selectedImages: [],
};

const selectedImagesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SELECTED_IMAGES:
      return {
        ...state,
        selectedImages: payload,
      };

    default:
      return state;
  }
};

export default selectedImagesReducer;
