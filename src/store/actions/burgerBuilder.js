import { HANDLE_INGREDIENT, CLEAR_ODER, SET_INGREDIENTS, FETCH_INGREDIENTS_FAILED } from './actionTypes';
import server from '../../axios-orders';

export const handleIngredient = (name, q) => {
    return {type: HANDLE_INGREDIENT, payload: {name:name, q:q}};
};

export const clearOder = () => {
    return {type: CLEAR_ODER};
};

const setIngredients = (ingredients) => {
    return {
        type: SET_INGREDIENTS,
        payload: ingredients
    }
}

const fetchIngredientsFailed = (error) => {
    return {
        type: FETCH_INGREDIENTS_FAILED,
        payload: error
    }
}

export const initIngredient = () => {
    return dispatch => {
        server.get('https://burger-shop-6267.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => dispatch(fetchIngredientsFailed(error)));
    }
}