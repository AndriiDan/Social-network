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
                ...action.payload,
                isAuth: true
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({ type: SET_USER_DATE, payload: { userId, email, login, isAuth } })

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