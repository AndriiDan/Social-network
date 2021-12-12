import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATE';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

// thunk для авторизації
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

// thunk для авторизації login
export const login = (email, password, rememberMe) => (dispatch) => {

    // зупинка форми (LoginReduxform = reduxForm({ form: 'login' })(LoginForm)); помилка по LoginForm - <Field name={"email"}
    let action = stopSubmit("login", { _error: "Common error" });
    dispatch(action);
    return;

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                // dispatch - внесення даних авторизації (з formData) 
                dispatch(getAuthUserData());
            }
        });
}

// thunk для logout
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                // dispatch - видалення (обнулення) даних авторизації 
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;