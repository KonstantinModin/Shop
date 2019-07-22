import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';
import { AUTH_LOGOUT } from '../actions/actionTypes';

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put({ 
        type: AUTH_LOGOUT
    });
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(action.logout());
}