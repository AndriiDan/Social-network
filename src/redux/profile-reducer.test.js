import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from 'react';

it('length posts should be increment', () => {

    // 1. test data; вхідні дані
    let action = addPostActionCreator("it-kamasutra.com");
    let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 15 },
            { id: 2, message: 'It\'s my first post.', likesCount: 20 }
        ]
    };

    // 2. action; провести тест
    let newState = profileReducer(state, action);

    // 3. expectation; очікуємо, що length стане 3
    expect(newState.posts.length).toBe(3);
});