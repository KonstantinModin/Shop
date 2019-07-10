import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_LOGOUT
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
        payload: {
            idToken: data.idToken,
            userId: data.localId
        }
    };
};

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        payload: error
    };
};

const logout = () => {
    return {
        type: AUTH_LOGOUT
    };
};

const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => dispatch(logout()), expirationTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    const key = 'AIzaSyCwToRAdwhUS9yZK67hNMtpRs11S37mJ9U';
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + key;
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + key;
        }
        axios.post(url, authData)
        .then(response => {
            console.log('response', response);
            dispatch(authSuccess(response.data));
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(error => {
            console.log('error :', error.response);
            dispatch(authFail(error.response.data.error));
        });
    }
}
