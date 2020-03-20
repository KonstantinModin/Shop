import { takeEvery } from "redux-saga/effects";
import {
    AUTH_INITIATE_LOGOUT,
    AUTH_CHECK_TIMEOUT,
    AUTH_USER,
    AUTH_CHECK_INITIAL_STATE,
    INIT_INGREDIENT,
    FETCH_PURCHASE_BURGER,
    FETCH_ORDERS_INIT
} from "../actions/actionTypes";

import {
    logoutSaga,
    checkAuthTimeoutSaga,
    authSaga,
    authCheckStateSaga
} from "./auth";
import { initIngredientSaga } from "./burgerBuilder";
import { purchaseBurgerSaga, fetchOrdersSaga } from "./order";

export function* watchAuth() {
    yield takeEvery(AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(AUTH_USER, authSaga);
    yield takeEvery(AUTH_CHECK_INITIAL_STATE, authCheckStateSaga);
}

export function* watchBurgerBuilder() {
    yield takeEvery(INIT_INGREDIENT, initIngredientSaga);
}

export function* watchOrder() {
    yield takeEvery(FETCH_PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(FETCH_ORDERS_INIT, fetchOrdersSaga);
}
