import { SET_DIMENSIONS } from './dimensions.types';

export const setDimensions = (payload) => {
    return {
        type: SET_DIMENSIONS,
        payload
    };
};