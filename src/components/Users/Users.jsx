import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import userPhoto from "../../assets/images/user.png";
import styles from "./Users.module.css";

let Users = (props) => {

    // інформація, про загальну к-сть сторінок
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    // створюємо масив сторінок
    let pages = [];
    // формуємо масив сторінок
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {/* сформовуємо рядок з номерацією сторінок */}
            {pages.map(p => {
                return <span
                    // виділяє активну сторінку
                    className={props.currentPage === p && styles.selectedPage}
                    // перемикає сторінку з юзерами
                    onClick={() => { props.onPageChanged(p) }}>
                    {p}
                </span>
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>

                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button
                                    disabled={props.followingInProgress}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);
                                        usersAPI.getUnfollow(u.id)
                                            .then(data => {
                                                if (data.resultCode == 0) {
                                                    props.unfollow(u.id)
                                                };
                                                props.toggleFollowingProgress(false, u.id);

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

                                            });
                                    }}>Unfollow</button>
                                : <button
                                    disabled={props.followingInProgress}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);
                                        usersAPI.getFollow(u.id)
                                            .then(data => {
                                                if (data.resultCode == 0) {
                                                    props.follow(u.id)
                                                };
                                                props.toggleFollowingProgress(false, u.id);

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

                                            });
                                    }}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
        }

    </div>

}

export default Users;