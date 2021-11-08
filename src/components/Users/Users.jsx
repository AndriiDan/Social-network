import React from 'react';
import * as axios from 'axios';
import userPhoto from "../../assets/image/user.png";
import styles from "./Users.module.css";


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            <div>
                <span>1</span>
                <span className={styles.selectedPage}>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            {
                this.props.users.map(u =>
                    <div key={u.id}>

                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                                //  width="50px"
                                />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)} >Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)} >Follow</button>}

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
}

export default Users;