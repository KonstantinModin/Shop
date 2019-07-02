import { HANDLE_INGREDIENT } from './actions';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 2,
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
        default: return state;
    }
};

export default reducer;