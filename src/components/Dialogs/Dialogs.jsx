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

    let dialogsData = [
        { id: 1, name: 'Танька' },
        { id: 2, name: 'Сергій' },
        { id: 3, name: 'Толік' },
        { id: 4, name: 'Саша' },
        { id: 5, name: 'Вася' },
        { id: 6, name: 'Dimych' }
    ]

    let dialogsElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your ReactJS?' },
        { id: 3, message: 'Прогресує.' }
    ]

    let MessagesElements = [
        <Message message={messagesData[0].message} />,
        <Message message={messagesData[1].message} />,
        <Message message={messagesData[2].message} />
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
            </div>
        </div>
    )
}

export default Dialogs;