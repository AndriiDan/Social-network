import React from 'react';
import * as axios from 'axios';
import Users from './Users';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            // засетити users
            this.props.setUsers(response.data.items);
            // засетити загальну к-сть юзерів
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    // метод, для обробника подій onClick - для зміни номера сторінки users, + запит на сервер 
    onPageChanged = (pageNumber) => {
        { this.props.setCurrentPage(pageNumber) };
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <Users />
    }
}

export default UsersAPIComponent;