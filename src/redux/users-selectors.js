import { createSelector } from "reselect";

// отримати users з state. Урок 82
const getUsersSelector = (state) => {
    return state.usersPage.users;
}

// урок 83. reselect - дія mapStateToProps без render сторінки; див. console на сторінці users
export const getUsers = createSelector(getUsersSelector, (users) => {
    // filter - пропустити всіх юзерів
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}