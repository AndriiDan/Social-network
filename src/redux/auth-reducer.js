const SET_USER_DATE = 'SET_USER_DATE';

let initialState = {
    id: null,
    email: null,
    login: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.date
            };
        default:
            return state;
    }
}

export const setAuthUserDate = (userId, email, login) =>
    ({ type: SET_USER_DATE, date: { userId, email, login } })

export default authReducer;