// використовуємо константи замість рядків для мінімізації помилки в написання
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

// Для першого запуску profileReducer
let initialState = {
    users: [],
    // к-сть юзерів на сторінці 
    pageSize: 5,
    // загальну к-сть юзерів
    totalUsersCount: 0,
    // текуча сторінка
    currentPage: 1
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
                users: action.users
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        // підмінюємо загальну к-сть користовачів
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            };
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
// засетити всіх юзерів
export const setUsersAC = (users) => ({
    type: SET_USERS, users
})
// засетити текучу сторінку
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
})
// засетити к-сть всіх юзерів
export const setUsersTotalCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
})

export default usersReducer;