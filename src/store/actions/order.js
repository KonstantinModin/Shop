import {
    FETCH_PURCHASE_BURGER, 
    PURCHASE_BURGER_FAIL, 
    PURCHASE_BURGER_SUCCESS, 
    PURCHASE_BURGER_START,
    PURCHASE_INIT,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAIL,
    FETCH_ORDERS_START,
    FETCH_ORDERS_INIT
} from './actionTypes';

// import server from '../../axios-orders';

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

export const purchaseBurgerStart = () => {
    return {
        type: PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (data, token) => {
    return {
        type: FETCH_PURCHASE_BURGER,
        data,
        token
    };
    // return dispatch => {
    //     dispatch(purchaseBurgerStart());
    //     server.post('/orders.json?auth=' + token, data)
    //         .then(res => {
    //             dispatch(purchaseBurgerSuccess(res.data.name, data));
    //         })           
    //         .catch(err => dispatch(purchaseBurgerFail(err)));
    // }
};

export const purchaseInit = () => {
    return {
        type: PURCHASE_INIT
    }
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        payload: orders
    }
};

export const fetchOrdersFail = (error) => {
    return {
        type: FETCH_ORDERS_FAIL,
        payload: error
    }
};

export const fetchOrdersStart = () => {
    return {
        type: FETCH_ORDERS_START
    }
};

export const fetchOrders = (token, userId) => {
    return {
        type: FETCH_ORDERS_INIT,
        token,
        userId
    };

    // return dispatch => {
    //     dispatch(fetchOrdersStart());
    //     const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    //     server.get('/orders.json' + queryParams)
    //     .then(response => {
    //         console.log('response.data :', response.data);
    //         dispatch(fetchOrdersSuccess(Object.entries(response.data)))
    //     })
    //     .catch(error => dispatch(fetchOrdersFail(error)));
    // }
}
