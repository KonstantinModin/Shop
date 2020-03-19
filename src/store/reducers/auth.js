import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    AUTH_LOGOUT,
    SET_AUTH_REDIRECT_PATH
} from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: "/"
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_START:
            return updateObject(state, { error: null, loading: true });
        case AUTH_FAIL:
            return updateObject(state, { error: payload, loading: false });
        case AUTH_SUCCESS:
            return updateObject(state, {
                token: payload.idToken,
                userId: payload.userId,
                error: null,
                loading: false
            });
        case AUTH_LOGOUT:
            return initialState;
        case SET_AUTH_REDIRECT_PATH:
            return updateObject(state, { authRedirectPath: payload });
        default:
            return state;
    }
};

export default reducer;
