import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'It\'s my first post.', likesCount: 20 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Танька' },
                { id: 2, name: 'Сергій' },
                { id: 3, name: 'Толік' },
                { id: 4, name: 'Саша' },
                { id: 5, name: 'Вася' },
                { id: 6, name: 'Dimych' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your ReactJS?' },
                { id: 3, message: 'Прогресує.' }
            ],
            // newMessageText: 'it-kamasutra.com'
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Танька' },
                { id: 2, name: 'Сергій' },
                { id: 3, name: 'Толік' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;
// store - OOP