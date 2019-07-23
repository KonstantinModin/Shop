import { takeEvery } from 'redux-saga/effects';
import { AUTH_INITIATE_LOGOUT, AUTH_CHECK_TIMEOUT, AUTH_USER, AUTH_CHECK_INITIAL_STATE } from '../actions/actionTypes';

import { logoutSaga, checkAuthTimeoutSaga, authSaga, authCheckStateSaga } from './auth';

export function* watchAuth() {
    yield takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(AUTH_USER, authSaga);
    yield takeEvery(AUTH_CHECK_INITIAL_STATE, authCheckStateSaga);
};