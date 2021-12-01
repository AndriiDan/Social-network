import { usersAPI } from "../api/api";

// використовуємо константи замість рядків для мінімізації помилки в написання
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

// Для першого запуску profileReducer
let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post.', likesCount: 20 }
    ],
    // стартове значення в полі вводу в text
    newPostText: 'it-kamasutra.com',
    profile: null
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
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

export default profileReducer;