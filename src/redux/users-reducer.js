// використовуємо константи замість рядків для мінімізації помилки в написання
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

// Для першого запуску profileReducer
let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Andrii', status: 'I am a boss', location: { city: 'Mizhirya', country: 'Ukraine' } },
        { id: 2, followed: true, fullName: 'Tolik', status: 'I am a boss too', location: { city: 'Lviv', country: 'Ukraine' } },
        { id: 3, followed: false, fullName: 'Dmitry', status: 'I am a boss too', location: { city: 'Minsk', country: 'Belarus' } }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        default:
            return state;
    }
}

export const followAC = (userId) => ({
    type: FOLLOW, userId
})
export const unfollowAC = (userId) => ({
    type: UNFOLLOW, userId
})

export default usersReducer;