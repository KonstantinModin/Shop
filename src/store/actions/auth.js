import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL
} from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: AUTH_START
    };
};

export const authSuccess = (data) => {
    return {
        type: AUTH_SUCCESS,
        payload: data
    };
};

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        payload: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCwToRAdwhUS9yZK67hNMtpRs11S37mJ9U', authData)
        .then(response => {
            console.log('response', response);
            dispatch(authSuccess(response.data))
        })
        .catch(error => {
            console.log('error :', error);
            dispatch(authFail(error));
        });
    }
}
