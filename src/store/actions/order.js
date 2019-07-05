import { 
    PURCHASE_BURGER_FAIL, 
    PURCHASE_BURGER_SUCCESS, 
    PURCHASE_BURGER_START,
    PURCHASE_INIT
} from './actionTypes';

import server from '../../axios-orders';

export const purchaseBurgerSuccess = (id, data) => {
    return {
        type: PURCHASE_BURGER_SUCCESS,
        payload: {
            id: id,
            data: data
        }
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: PURCHASE_BURGER_FAIL,
        payload: {
            error: error
        }
    };
};

const purchaseBurgerStart = () => {
    return {
        type: PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (data, init, pus) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        server.post('/orders.json', data)
            .then(res => {
                dispatch(purchaseBurgerSuccess(res.data.name, data));
                console.log(init, pus);
                console.log('posted: :', res);
                init();
                pus('/');
                
            })           
            .catch(err => dispatch(purchaseBurgerFail(err)));
    }
};

export const purchaseInit = () => {
    return {
        type: PURCHASE_INIT
    }
};
