import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Танька' id='1' />
                <DialogItem name='Сергій' id='2' />
                <DialogItem name='Толік' id='3' />
                <DialogItem name='Саша' id='4' />
                <DialogItem name='Вася' id='5' />
                <DialogItem name='Dimych' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How is your ReactJS?' />
                <Message message='Прогресує.' />
            </div>
        </div>
    )
}

export default Dialogs;