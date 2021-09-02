let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 15 },
            { id: 2, message: 'It\'s my first post.', likesCount: 20 }
        ]
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
    }
}

export default state;