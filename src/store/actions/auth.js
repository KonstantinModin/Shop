import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    // AUTH_LOGOUT,
    SET_AUTH_REDIRECT_PATH,
    AUTH_INITIATE_LOGOUT,
    AUTH_CHECK_TIMEOUT,
    AUTH_USER,
    AUTH_CHECK_INITIAL_STATE
} from "./actionTypes";
// import axios from 'axios';

export const authStart = () => {
    return {
        type: AUTH_START
    };
};

export const authSuccess = data => {
    return {
        type: AUTH_SUCCESS,
        payload: {
            idToken: data.idToken,
            userId: data.localId
        }
    };
};

export const authFail = error => {
    return {
        type: AUTH_FAIL,
        payload: error
    };
};

export const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
        type: AUTH_INITIATE_LOGOUT
    };
};

export const checkAuthTimeout = expirationTime => {
    return {
        type: AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    };
    // return dispatch => {
    //     setTimeout(() => dispatch(logout()), expirationTime * 1000);
    // };
};

export const auth = (email, password, isSignup) => {
    return {
        type: AUTH_USER,
        email,
        password,
        isSignup
    };
    // const key = 'AIzaSyCwToRAdwhUS9yZK67hNMtpRs11S37mJ9U';
    // return dispatch => {
    //     dispatch(authStart());
    //     const authData = {
    //         email: email,
    //         password: password,
    //         returnSecureToken: true
    //     };
    //     let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + key;
    //     if (!isSignup) {
    //         url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + key;
    //     }
    //     axios.post(url, authData)
    //     .then(response => {
    //         console.log('response', response);
    //         const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
    //         localStorage.setItem('token', response.data.idToken);
    //         localStorage.setItem('expirationDate', expirationDate);
    //         localStorage.setItem('userId', response.data.localId);
    //         dispatch(authSuccess(response.data));
    //         dispatch(checkAuthTimeout(response.data.expiresIn));
    //     })
    //     .catch(error => {
    //         console.log('error :', error.response);
    //         dispatch(authFail(error.response.data.error));
    //     });
    // };
};

export const setAuthRedirectPath = path => {
    return {
        type: SET_AUTH_REDIRECT_PATH,
        payload: path
    };
};

export const authCheckState = () => {
    return {
        type: AUTH_CHECK_INITIAL_STATE
    };
    // return dispatch => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         dispatch(logout());
    //     } else {
    //         const expirationDate = new Date(localStorage.getItem('expirationDate'));
    //         const userId = localStorage.getItem('userId');
    //         if (expirationDate >= new Date()) {
    //             dispatch(authSuccess({token: token, userId: userId}));
    //             dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    //         } else {
    //             dispatch(logout());
    //         }
    //     }
    // };
};
