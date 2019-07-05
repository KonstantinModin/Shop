import { PURCHASE_BURGER_FAIL, PURCHASE_BURGER_SUCCESS } from './actionTypes';

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

