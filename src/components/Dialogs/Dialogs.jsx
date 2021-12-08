import React from 'react';
import AddMessageForm from './AddMessageForm/AddMessageForm';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)

    // ф-ція, яка виводить зібрані дані з форми
    let addNewMessage = (values) => {
        // передати отримані дані в sendMessage; sendMessage приходить з <DialogsContainer />; values.newMessageBody приходить з <AddMessageForm />
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsElements}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                {/* onSubmit={addNewMessage} зібрані дані з форми AddMessageForm чепез onSubmit */}
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs;