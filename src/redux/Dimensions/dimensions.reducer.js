import { SET_DIMENSIONS } from "./dimensions.types";

const INITIAL_STATE = {
    dimensions: {
        width: -1,
        height: -1
    }
};

const dimensionsReducer = (state = INITIAL_STATE, action) => {

    const { type, payload } = action;

    switch (type) {

        case SET_DIMENSIONS:
            return {
                ...state,
                dimensions: payload,
            };

        default: return state;
    }
};

export default dimensionsReducer;