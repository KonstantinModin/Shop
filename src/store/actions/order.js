import { PURCHASE_BURGER_FAIL, PURCHASE_BURGER_SUCCESS } from './actionTypes';
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

export const purchaseBurgerStart = (data) => {
    return dispatch => {
        server.post('/orders.json', data)
            .then(res => dispatch(purchaseBurgerSuccess(res.data, data)))
            .catch(err => dispatch(purchaseBurgerFail(err)));
    }
}
