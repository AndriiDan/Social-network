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
export const getAuthUserData = () => async (dispatch) => {
    // async - await - асинхронно (замість .then) для повернення промісу для initializedSuccess в app-reducer.js
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

// thunk для авторизації login
export const login = (email, password, rememberMe) => async (dispatch) => {
    // async - await - асинхронно (замість .then)
    let response = await authAPI.login(email, password, rememberMe);
    // якщо resultCode === 0, то авторизуватися
    if (response.data.resultCode === 0) {
        // dispatch - внесення даних авторизації (з formData) 
        dispatch(getAuthUserData());
    } else {
        // інакше, зупинка форми (LoginReduxform = reduxForm({ form: 'login' })(LoginForm)); помилка по LoginForm - <Field name={"email"}
        // якщо messages.length > 0 відобразити response.data.messages, інакше - повідомлення "Some error"
        let message = response.data.messages.length > 0 ? response.data.messages : "Some error";
        dispatch(stopSubmit("login", { _error: message }))
    }
}

// thunk для logout
export const logout = () => async (dispatch) => {
    // async - await - асинхронно (замість .then)
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        // dispatch - видалення (обнулення) даних авторизації 
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;