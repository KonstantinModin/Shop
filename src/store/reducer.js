import { HANDLE_INGREDIENT } from './actions';

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
            }
        };
        default: return state;
    }
};

export default reducer;