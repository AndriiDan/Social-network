import React from 'react';
import { connect } from 'react-redux';
// import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow, toggleFollowingProgress, getUsers } from '../../redux/users-reducer'; // видалити
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
// import { usersAPI } from '../../api/api'; // видалити

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        // // для відображення анімації при відправленні запиту
        // this.props.toggleIsFetching(true);
        // // getUsers - get-запит
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         // для завершення відображення анімації після запиту   
        //         this.props.toggleIsFetching(false);
        //         // засетити users
        //         this.props.setUsers(data.items);
        //         // засетити загальну к-сть юзерів
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
    }

    // метод, для обробника подій onClick - для зміни номера сторінки users, + запит на сервер 
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

        // // для відображення анімації при відправленні запиту
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // // getUsers - get-запит
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, { withCredentials: true })
        //     .then(data => {
        //         // для завершення відображення анімації після запиту
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });
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
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// HOC перевірка чи авторизований вхід
let withRedirect = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress,
    //  setUsers, toggleIsFetching, setTotalUsersCount, // видалити
    getUsers: getUsers
})(withRedirect);