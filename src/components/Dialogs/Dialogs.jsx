import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

{/* <div>
    <DialogItem />
    <Message />
</div> */}
const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Танька' },
        { id: 2, name: 'Сергій' },
        { id: 3, name: 'Толік' },
        { id: 4, name: 'Саша' },
        { id: 5, name: 'Вася' },
        { id: 6, name: 'Dimych' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your ReactJS?' },
        { id: 3, message: 'Прогресує.' }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let MessagesElements = messages.map(m => <Message message={m.message} />)

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