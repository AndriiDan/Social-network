import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        // запит у state значення dialogsPage
        dialogsPage: state.dialogsPage,
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

// слої поверх Dialogs, починаючи з низу: withAuthRedirect, connect
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // перевірки авторизації з HOC withAuthRedirect
    // тимчасово закоментую, щось перенаправляє на login після відправлення повідомлення (урок 76)
    // withAuthRedirect
)(Dialogs);
