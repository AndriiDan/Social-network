import { profileAPI, usersAPI } from "../api/api";

// використовуємо константи замість рядків для мінімізації помилки в написання
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

// Для першого запуску profileReducer
let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post.', likesCount: 20 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            // формує новий пост за зразком posts-масиву
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                // створюю копію state
                ...state,
                // створюю копію posts і додаю в кінець новий пост (аналогічно як push)
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, status: action.status }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(p => p.id != action.userId) }
        default:
            return state;
    }
}

// actionCreator(и):
export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST, newPostText
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const setStatus = (status) => ({
    type: SET_STATUS, status
})
// видалити пост
export const deletePost = (userId) => ({
    type: DELETE_POST, userId
})


// thunk для конкретного користувача
export const getUserProfile = (userId) => async (dispatch) => {
    // async - await - асинхронно (замість .then)
    // запит на сервер з api.is
    const response = await usersAPI.getProfile(userId);
    // засетити userProfile з сервера
    dispatch(setUserProfile(response.data));
}

// thunk для отримання статуса конкретного користувача
export const getStatus = (userId) => async (dispatch) => {
    // async - await - асинхронно (замість .then)
    // запит на сервер з api.is для отримання статуса
    const response = await profileAPI.getStatus(userId);
    // засетити status з сервера
    dispatch(setStatus(response.data))
}

// thunk для оновлення статуса конкретного користувача
export const updateStatus = (status) => async (dispatch) => {
    // async - await - асинхронно (замість .then)
    // надіслати на сервер статус з текстом(статусом)
    const response = await profileAPI.updateStatus(status);
    // якщо з сервера прийде відповідь "0" (все добре)
    if (response.data.resultCode === 0) {
        // засетити status 
        // засетити status 
        // засетити status 
        dispatch(setStatus(status))
    }
}

export default profileReducer;