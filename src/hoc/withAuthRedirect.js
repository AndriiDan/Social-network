import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    // запит у state значення isAuth
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            // перенапрівлення для авторизації при неавторизованому вході
            if (!this.props.isAuth) return <Redirect to="/login" />
            // повертає конкретну компоненту з прокинутими пропсами
            return <Component {...this.props} />
        }
    }

    // обертаю RedirectComponent коннектом, щоб прокинути значення isAuth
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent
}
