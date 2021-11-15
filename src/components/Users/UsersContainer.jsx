import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, toggleIsFetchingAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        // для відображення анімації при відправленні запиту
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            // для завершення відображення анімації після запиту   
            this.props.toggleIsFetching(false);
            // засетити users
            this.props.setUsers(response.data.items);
            // засетити загальну к-сть юзерів
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    // метод, для обробника подій onClick - для зміни номера сторінки users, + запит на сервер 
    onPageChanged = (pageNumber) => {
        // для відображення анімації при відправленні запиту
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            // для завершення відображення анімації після запиту
            this.props.toggleIsFetching(false);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        // прокидуємо з users-reducer.js
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);