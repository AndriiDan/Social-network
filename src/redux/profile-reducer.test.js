import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from 'react';

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post.', likesCount: 20 }
    ]
};


it('length posts should be increment', () => {

    // 1. test data; вхідні дані
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action; провести тест
    let newState = profileReducer(state, action);

    // 3. expectation; очікуємо, що length стане 3
    expect(newState.posts.length).toBe(3);
});


it('message of new posts should be correct', () => {

    // 1. test data; вхідні дані
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action; провести тест
    let newState = profileReducer(state, action);

    // 3. expectation; очікуємо, що length стане 3
    expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {

    // 1. test data; вхідні дані
    let action = deletePost(1);

    // 2. action; провести тест
    let newState = profileReducer(state, action);

});