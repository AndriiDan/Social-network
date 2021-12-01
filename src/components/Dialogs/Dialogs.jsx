import React from 'react';
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

    // вивід статусу авторизації
    alert(props.isAuth);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsElements}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                            // щоб змінювалося value, необхідний onChange (приходить з BLL)
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;