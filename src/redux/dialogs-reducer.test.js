import React from "react";
import dialogsReducer, { sendMessageCreator } from "./dialogs-reducer";

let state = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your ReactJS?' },
        { id: 3, message: 'Прогресує.' }
    ]
}

it('length messages should be incrementted', () => {

    // 1. test data
    let action = sendMessageCreator("new message");

    // 2.action
    let newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages.length).toBe(4);
})

it('message of new message should be corect', () => {

    // 1. test data
    let action = sendMessageCreator("new message");

    // 2.action
    let newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages[3].message).toBe("new message");
})
