import { put } from 'redux-saga/effects';
import { purchaseBurgerStart, purchaseBurgerFail, purchaseBurgerSuccess, fetchOrdersStart, 
    fetchOrdersSuccess, fetchOrdersFail } from '../actions';
import server from '../../axios-orders';

export function* purchaseBurgerSaga({ token, data }) {
    yield put(purchaseBurgerStart());
    try {
        const response = yield server.post('/orders.json?auth=' + token, data);
        yield put(purchaseBurgerSuccess(response.data.name, data));        
    } catch(error) {
        yield put(purchaseBurgerFail(error));
    }
};

export function* fetchOrdersSaga({ token, userId }) {
    yield put(fetchOrdersStart());
    try {
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        const response = yield server.get('/orders.json' + queryParams);
        console.log('response.data :', response.data);
        yield put(fetchOrdersSuccess(Object.entries(response.data)));

    } catch(error) {
        yield put(fetchOrdersFail(error));
    }       
}