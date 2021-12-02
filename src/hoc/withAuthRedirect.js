import React from "react";
import { Redirect } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            // перенапрівлення для авторизації при неавторизованому вході
            if (!this.props.isAuth) return <Redirect to="/login" />
            // повертає конкретну компоненту з прокинутими пропсами
            return <Component {...this.props} />
        }
    }
    return RedirectComponent
}