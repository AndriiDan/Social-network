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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

        // else if (action.type === ADD_MESSAGE) {
        //     let newMessage = {
        //         id: 4,
        //         message: this._state.dialogsPage.newMessageText
        //     };
        //     this._state.dialogsPage.messages.push(newMessage);
        //     this._state.dialogsPage.newMessageText = '';
        //     this._callSubscriber(this._state);

        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 4, message: body });
            this._callSubscriber(this._state);
        }

        // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     this._state.dialogsPage.newMessageText = action.newText;
        //     this._callSubscriber(this._state);

        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

// export const addMessageActionCreator = () => ({
//     type: ADD_MESSAGE
// })
// export const updateNewMessageTextActionCreator = (text) => ({
//     type: UPDATE_NEW_MESSAGE_TEXT, newText: text
// })

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;
// store - OOP