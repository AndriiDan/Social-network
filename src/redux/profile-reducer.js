// використовуємо константи замість рядків для мінімізації помилки в написання
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// Для першого запуску profileReducer
let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post.', likesCount: 20 }
    ],
    // стартове значення в полі вводу в text
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            // формує новий пост за зразком posts-масиву
            let newPost = {
                id: 3,
                // значення з 
                message: state.newPostText,
                likesCount: 0
            };
            // додає новий пост в кінець масиву
            state.posts.push(newPost);
            // обнуляє поле вводу після додавання поста
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;