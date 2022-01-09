import React from "react";
import dialogsReducer, { deleteMessage, sendMessageCreator } from "./dialogs-reducer";

let state = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your ReactJS?' },
        { id: 3, message: 'Прогресує.' }
    ]
}

// test для додавання повідомлення
it('length messages should be incrementted', () => {

    // 1. test data
    let action = sendMessageCreator("new message");

    // 2.action
    let newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages.length).toBe(4);
})

// test для перевірки коректності повідомлення
it('message of new message should be correct', () => {

    // 1. test data
    let action = sendMessageCreator("new message");

    // 2.action
    let newState = dialogsReducer(state, action);

    // 3. expectation
    expect(newState.messages[3].message).toBe("new message");
})

// test для видалення повідомлення; довжина масива messages повинна зменшитися
it("after deleting length of messages should be decrement", () => {
    let action = deleteMessage(1);
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(2);
})

// test для некоректного Id
it("after deleting length shouldn't be decrement if id is incorrect", () => {
    let action = deleteMessage(1000);
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(3);
})