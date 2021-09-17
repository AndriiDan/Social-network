let store = {
    state: {
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
            newMessageText: 'it-kamasutra.com'
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Танька' },
                { id: 2, name: 'Сергій' },
                { id: 3, name: 'Толік' }
            ]
        }
    },
    rerenderEntireTree() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 3,
            message: state.profilePage.newPostText,
            likesCount: 0
        };

        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(state);
    },
    updateNewPostText(newText) {
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: state.dialogsPage.newMessageText
        };

        state.dialogsPage.messages.push(newMessage);
        state.dialogsPage.newMessageText = '';
        rerenderEntireTree(state);
    },
    updateNewMessageText(newText) {
        state.dialogsPage.newMessageText = newText;
        rerenderEntireTree(state);
    },
    subscribe(observer) {
        rerenderEntireTree = observer;
    }
}

export default store;
window.store = store;
// store - OOP