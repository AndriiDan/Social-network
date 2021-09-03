import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './FriendItem.module.css';

const FriendItem = (props) => {
    let path = props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default FriendItem;