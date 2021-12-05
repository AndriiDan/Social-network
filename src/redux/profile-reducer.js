import { profileAPI, usersAPI } from "../api/api";

// використовуємо константи замість рядків для мінімізації помилки в написання
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

// Для першого запуску profileReducer
let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post.', likesCount: 20 }
    ],
    // стартове значення в полі вводу в text
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                // створюю копію state
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            // формує новий пост за зразком posts-масиву
            let newPost = {
                id: 3,
                // значення з 
                message: state.newPostText,
                likesCount: 0
            };
            return {
                // створюю копію state
                ...state,
                // створюю копію posts і додаю в кінець новий пост (аналогічно як push)
                posts: [...state.posts, newPost],
                // обнуляю поле вводу
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    }
}

// actionCreator(и):
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const setStatus = (status) => ({
    type: SET_STATUS, status
})


// thunk для конкретного користувача
export const getUserProfile = (userId) => (dispatch) => {
    // запит на сервер з api.is
    usersAPI.getProfile(userId)
        .then(response => {
            // засетити userProfile з сервера
            dispatch(setUserProfile(response.data));
        });
}

// thunk для отримання статуса конкретного користувача
export const getStatus = (userId) => (dispatch) => {
    // запит на сервер з api.is для отримання статуса
    profileAPI.getStatus(userId)
        .then(response => {
            // засетити status з сервера
            dispatch(setStatus(response.data))
        })
}

// thunk для оновлення статуса конкретного користувача
export const updateStatus = (status) => (dispatch) => {
    // надіслати на сервер статус з текстом(статусом)
    profileAPI.updateStatus(status)
        .then(response => {
            // якщо з сервера прийде відповідь "0" (все добре)
            if (response.data.resultCode === 0) {
                // засетити status 
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;