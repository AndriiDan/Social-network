import React from "react";
import { NavLink } from "react-router-dom";
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
                                ? <button onClick={() => props.unfollow(u.id)} >Unfollow</button>
                                : <button onClick={() => props.follow(u.id)} >Follow</button>}

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