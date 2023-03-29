import { combineReducers } from "redux";
import imageReducer from "./Image/image.reducer";
import dimensionsReducer from "./Dimensions/dimensions.reducer";
import selectedReducer from "./Selected/selected.reducer";
import selectedImagesReducer from "./Selected Images/selected.images.reducer";

export default combineReducers({
  imageReducer,
  dimensionsReducer,
  selectedReducer,
  selectedImagesReducer,
});
