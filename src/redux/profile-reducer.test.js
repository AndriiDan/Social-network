import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from 'react';

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post.', likesCount: 20 }
    ]
};

// довжина масива постів повинна збільшитися
it('length posts should be increment', () => {

    // 1. test data; вхідні дані
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action; провести тест
    let newState = profileReducer(state, action);

    // 3. expectation; очікуємо, що length стане 3
    expect(newState.posts.length).toBe(3);
});

// текст поста повинен бути коректним
it('message of new posts should be correct', () => {

    // 1. test data; вхідні дані
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action; провести тест
    let newState = profileReducer(state, action);

    // 3. expectation; очікуємо, що length стане 3
    expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

// після видалення поста довжина масива постів повинна зменшитися
it('after deleting length of messages should be decrement', () => {

    // 1. test data; вхідні дані
    let action = deletePost(1);

    // 2. action; провести тест
    let newState = profileReducer(state, action);

    // 3. expectation; очікуємо, що length стане 1
    expect(newState.posts.length).toBe(1);

});

// після видалення некоректного id поста довжина масива постів не повинна змінитися
it(`after deleting length shouldn't be decrement if id is incorrect`, () => {

    // 1. test data; вхідні дані
    let action = deletePost(1000);

    // 2. action; провести тест
    let newState = profileReducer(state, action);

    // 3. expectation; очікуємо, що length стане 1
    expect(newState.posts.length).toBe(2);

});