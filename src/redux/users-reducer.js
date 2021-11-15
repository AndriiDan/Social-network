// використовуємо константи замість рядків для мінімізації помилки в написання
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// Для першого запуску profileReducer
let initialState = {
    users: [],
    // к-сть юзерів на сторінці 
    pageSize: 5,
    // загальну к-сть юзерів
    totalUsersCount: 0,
    // текуча сторінка
    currentPage: 1,
    // для відображення анімації при оновленні або запиті
    isFetching: true
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
        // для анімації при оновленні або запиті
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({
    type: FOLLOW, userId
})
export const unfollow = (userId) => ({
    type: UNFOLLOW, userId
})
// засетити всіх юзерів
export const setUsers = (users) => ({
    type: SET_USERS, users
})
// засетити текучу сторінку
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
})
// засетити к-сть всіх юзерів
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
})
// для відображення анімації при оновленні або запиті
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

export default usersReducer;