// використовуємо константи замість рядків для мінімізації помилки в написання
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

// Для першого запуску profileReducer
let initialState = {
    users: [],
    // додамо к-сть юзерів на сторінці (pageSize) та загальну к-сть юзерів (totalUsersCount)
    pageSize: 5,
    totalUsersCount: 20,
    // текуча сторінка
    currentPage: 2
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
        case SET_USERS: {
            return {
                ...state,
                users: [
                    // якщо розкоментувати, то 2 рази вводить одних і тих users
                    // ...state.users,
                    ...action.users]
            }
        }
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
export const setUsersAC = (users) => ({
    type: SET_USERS, users
})

export default usersReducer;