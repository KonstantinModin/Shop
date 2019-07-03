import { HANDLE_INGREDIENT, CLEAR_ODER } from './actionTypes';

export const handleIngredient = (name, q) => {
    return {type: HANDLE_INGREDIENT, payload: {name:name, q:q}};
};

export const clearOder = () => {
    return {type: CLEAR_ODER};
}