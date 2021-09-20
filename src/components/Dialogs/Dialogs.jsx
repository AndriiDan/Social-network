import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let MessagesElements = props.state.messages.map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef();
    let addMessage = () => {
        // props.addMessage();
        props.dispatch({ type: 'ADD-MESSAGE' });
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        // props.updateNewMessageText(text);
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages1}>
                    {MessagesElements}
                </div>
                <div className={s.messages2}>
                    {MessagesElements}
                </div>
            </div>
            <div>
                <div>
                    <textarea
                        ref={newMessageElement}
                        onChange={onMessageChange}
                        value={props.state.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;