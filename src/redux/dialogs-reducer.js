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
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }],
                newMessageBody: ''
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;