import { SET_IMAGE } from './image.types';

export const setImage = (payload) => {
    return {
        type: SET_IMAGE,
        payload
    };
};