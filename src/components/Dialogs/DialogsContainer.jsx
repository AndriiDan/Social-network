import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        // запит у state значення isAuth
        isAuth: state.auth.isAuth

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

// контейнерна компонента над Dialogs для перевірки авторизації
let AutnRedirectComponent = (props) => {
    // перенапрівлення для авторизації при неавторизованому вході
    if (!props.isAuth) return <Redirect to="/login" />
    // в {...props} прокидує пропси всередину
    return <Dialogs {...props} />
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AutnRedirectComponent);

export default DialogsContainer;