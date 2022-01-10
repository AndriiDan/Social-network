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
    followingInProgress: [],
    // фейкове значення для перевірки урок 82
    fake: 10
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
export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        // для відображення анімації при відправленні запиту
        dispatch(toggleIsFetching(true));
        // відображати активний номер сторінки користувачів
        dispatch(setCurrentPage(page));

        // getUsers - get-запит
        const data = await usersAPI.getUsers(page, pageSize);
        // для завершення відображення анімації після запиту 
        dispatch(toggleIsFetching(false));
        // засетити users
        dispatch(setUsers(data.items));
        // засетити загальну к-сть юзерів
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

// метод, в який винесено спільне для follow та unfollow
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    };
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.follow.bind(usersAPI);
        const actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.unfollow.bind(usersAPI);
        const actionCreator = unfollowSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

export default usersReducer;