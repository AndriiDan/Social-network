const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                // // створюю копію state
                ...state,
                newMessageBody: action.body
            };
        // надіслати повідомлення
        case SEND_MESSAGE:
            // newMessageBody беремо з action(a) sendMessageCreator
            let body = action.newMessageBody;
            return {
                // створюю копію state
                ...state,
                // створюю копію messages і додаю в кінець нове повідомлення (аналогічно як push)
                messages: [...state.messages, { id: 4, message: body }],
            };
        default:
            return state;
    }
}

// sendMessageCreator - це actionCreator; newMessageBody приходить з DialogsContainer.jsx з mapDispatchToProps
export const sendMessageCreator = (newMessageBody) => ({
    // newMessageBody - це action
    type: SEND_MESSAGE, newMessageBody
})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;