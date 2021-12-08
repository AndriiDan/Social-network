import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
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
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}


// константа для максимальної довжини в 50 символів 
const maxLength50 = maxLengthCreator(50);

// компонента форми
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/* введене значення користувачем */}
                {/* validate: required - обов'язово заповнити; maxLength50 - макс. к-сть символів */}
                <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;