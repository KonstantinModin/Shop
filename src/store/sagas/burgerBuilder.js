import { put } from 'redux-saga/effects';
import server from '../../axios-orders';
import {setIngredients, fetchIngredientsFailed } from '../actions';

export function* initIngredientSaga(action) {
    try {
        const response = yield server.get('https://burger-shop-6267.firebaseio.com/ingredients.json');
        yield put(setIngredients(response.data));        
    } catch(error) {
        yield put(fetchIngredientsFailed(error));
    }
};