import { HANDLE_INGREDIENT, CLEAR_ODER } from '../actions/actionTypes';
const INGREDIENT_PRICES = {
    salad: 0.1,
    cheese: 0.1,
    meat: 0.3,
    bacon: 0.2
};

const initialState = {
    ingredients: null,
    totalPrice: 2,
    error: false
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case HANDLE_INGREDIENT: return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [payload.name]: state.ingredients[payload.name] + payload.q
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[payload.name]*payload.q
        };
        case CLEAR_ODER: return initialState;
        default: return state;
    }
};

export default reducer;