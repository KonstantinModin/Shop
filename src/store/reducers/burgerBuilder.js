import { 
    HANDLE_INGREDIENT,      
    SET_INGREDIENTS, 
    FETCH_INGREDIENTS_FAILED,
    INIT_INGREDIENT 
} from '../actions/actionTypes';

import { updateObject } from "../utility";

const INGREDIENT_PRICES = {
    salad: 0.1,
    cheese: 0.1,
    meat: 0.3,
    bacon: 0.2
};

const initialState = {
    ingredients: null,
    totalPrice: 2,
    error: false,
    building: false
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case INIT_INGREDIENT: {
            // console.log('INIT_INGREDIENT Reducer');
            return state;
        }
        case SET_INGREDIENTS: return updateObject(state,
            {ingredients: {
                salad: payload.salad,
                bacon: payload.bacon,
                cheese: payload.cheese,
                meat: payload.meat
            },
            totalPrice: 2,
            error: false,
            building: false});
            
        case FETCH_INGREDIENTS_FAILED: return updateObject(state, {error: true});

        case HANDLE_INGREDIENT: return updateObject(state,
            {ingredients: updateObject(state.ingredients,
                {[payload.name]: state.ingredients[payload.name] + payload.q}),
            totalPrice: state.totalPrice + INGREDIENT_PRICES[payload.name] * payload.q,
            building: true});        
        
        default: return state;
    }
};

export default reducer;