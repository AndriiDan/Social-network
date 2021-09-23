import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

export default store;
window.store = store;
// store - OOP