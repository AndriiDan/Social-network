import { rerenderEntireTree } from "../render";

let state = {
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
        ]
    },
    sidebar: {
        friends: [
            { id: 1, name: 'Танька' },
            { id: 2, name: 'Сергій' },
            { id: 3, name: 'Толік' }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;