import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    Танька
                </div>
                <div className={s.dialog}>
                    Сергій
                </div>
                <div className={s.dialog}>
                    Толік
                </div>
                <div className={s.dialog}>
                    Саша
                </div>
                <div className={s.dialog}>
                    Вася
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
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