import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';
import { AUTH_LOGOUT } from '../actions/actionTypes';
import { authStart, authSuccess, authFail, checkAuthTimeout, logout } from '../actions';
import axios from 'axios';

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

export function* authSaga(action) {
    const key = 'AIzaSyCwToRAdwhUS9yZK67hNMtpRs11S37mJ9U';
    yield put(authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };
        
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + key;
    if (!action.isSignup) {
        url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + key;
    }
    try {
        const response = yield axios.post(url, authData)
            
        console.log('response', response);
        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);
        yield put(authSuccess(response.data));
        yield put(checkAuthTimeout(response.data.expiresIn));
    } catch(error) {
        console.log('error :', error.response);
        yield put(authFail(error.response.data.error));
    }    
}

export function* authCheckStateSaga(action) {   
    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if (expirationDate >= new Date()) {
            const userId = yield localStorage.getItem('userId');
            yield put(authSuccess({idToken: token, localId: userId}));
            yield put(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        } else {
            yield put(logout());
        }
    }    
}