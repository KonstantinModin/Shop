import { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL } from '../actions/actionTypes';

const initialState = { 
    orders: [],
    loading: false
}
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case PURCHASE_BURGER_SUCCESS: {
            const newOrder = {
                ...payload.data,
                id: payload.id
            }
            return {
                ...state,
                loading: false,
                orders: [...state.orders, newOrder]
            }
        };
        case PURCHASE_BURGER_FAIL: {
            return {
                ...state,
                loading: false
            }
        };
        default: return state;
    }
};

export default reducer;