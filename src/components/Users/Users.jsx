import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
    return <div>
        {/* Відображення номерів сторінок з Users */}
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
        <div>
            {
                users.map(u =>
                    // відображення конкретного юзера
                    <User user={u} key={u.id} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />
                )
            }
        </div>

    </div>

}

export default Users;