import { SET_IMAGE } from "./image.types";

const INITIAL_STATE = {
    images: {
        inputImage: "",
        outputImage: ""
    }
};

const imageReducer = (state = INITIAL_STATE, action) => {

    const { type, payload } = action;

    switch (type) {

        case SET_IMAGE:
            return {
                ...state,
                images: payload,
            };

        default: return state;
    }
};

export default imageReducer;