import { 
    PURCHASE_BURGER_SUCCESS, 
    PURCHASE_BURGER_FAIL, 
    PURCHASE_BURGER_START, 
    PURCHASE_INIT,
    FETCH_ORDERS_START,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAIL
} from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = { 
    orders: [],
    loading: false,
    purchased: false
}
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case PURCHASE_BURGER_START: return updateObject (state, {loading: true});
        
        case PURCHASE_BURGER_SUCCESS: 
            const newOrder = [
                payload.id,
                {ingredients: payload.data.ingredients,
                 price: payload.data.price,
                 date: payload.data.date,
                 customerData: payload.data.customerData,
                 deliveryMethod: payload.data.deliveryMethod
                }                   
            ];
            return updateObject(state,
                {loading: false,
                orders: [...state.orders, newOrder],
                purchased: true});
        
        case PURCHASE_BURGER_FAIL: return updateObject(state, {loading: false});
        
        case PURCHASE_INIT: return updateObject(state, {purchased: false});
        
        case FETCH_ORDERS_START: return updateObject(state, {loading: true});
        
        case FETCH_ORDERS_SUCCESS: return updateObject(state,
                {orders: payload,
                loading: false});

        case FETCH_ORDERS_FAIL: return updateObject(state, {loading: false});

        default: return state;
    }
};

export default reducer;