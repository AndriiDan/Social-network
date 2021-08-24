import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Танька</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Сергій</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Толік</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Саша</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Вася</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/6'>Dimych</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How is your ReactJS?
                </div>
                <div className={s.message}>
                    Прогресує.
                </div>
            </div>
        </div>
    )
}

export default Dialogs;