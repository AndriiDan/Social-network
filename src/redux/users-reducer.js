import { usersAPI } from "../api/api";

// використовуємо константи замість рядків для мінімізації помилки в написання
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

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
    isFetching: true,
    // для блокування кнопки при відправленні запиту
    followingInProgress: []
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
        // для блокування кнопки при відправленні запиту
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({
    type: FOLLOW, userId
})
export const unfollowSuccess = (userId) => ({
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
// для блокування кнопки при відправленні запиту
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})

// ThunkCreator
export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        // для відображення анімації при відправленні запиту
        dispatch(toggleIsFetching(true));
        // відображати активний номер сторінки користувачів
        dispatch(setCurrentPage(currentPage));

        // getUsers - get-запит
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                // для завершення відображення анімації після запиту 
                dispatch(toggleIsFetching(false));
                // засетити users
                dispatch(setUsers(data.items));
                // засетити загальну к-сть юзерів
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                };
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "86e5f8fb-0fbf-4804-b46b-33ed56eeeec0"
//     }
// }).
//     then(response => {
//         if (response.data.resultCode == 0) {
//             props.follow(u.id)
//         }


export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                };
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "86e5f8fb-0fbf-4804-b46b-33ed56eeeec0"
//     }
// }).
//     then(response => {
//         if (response.data.resultCode == 0) {
//             props.unfollow(u.id)
//         }

export default usersReducer;