import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)

    // Приходить з state
    let newMessageBody = state.newMessageBody;

    // коли відбулася подія. іде в BLL - далі з BLL приходить новий value (newMessageBody)
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

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
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

// компонента форми
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;