import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
    // {props.handleSubmit} приходять з reduxForm "під капотом"
    return <form onSubmit={handleSubmit}>
        {/* Поле вводу для Email. Field замість input, щоб form реагувала на onChange */}
        {createField("Email", "email", [required], Input)}

        {/* Поле вводу для Password */}
        {createField("Password", "password", [required], Input, { type: "password" })}

        {/* Поле вводу для галочки rememberMe */}
        {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

        {/* відображення помилки вводу email або password */}
        {error && <div className={style.formSummeryError}>
            {error}
        </div>
        }

        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxform = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ login, isAuth }) => {
    // функція, в яку приходять дані з форми. formData - це об'єкт з даними, які були заповнені у form
    const onSubmit = (formData) => {
        // props.login - це callback повернутий connect(ом) після (під час) оброблення thunk{login}
        // з formData дістаємо email, password, rememberMe
        login(formData.email, formData.password, formData.rememberMe);
    }

    // якщо в props є isAuth=true, то Redirect на сторінку Profile
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    //  якщо в props isAuth=false, то:
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxform onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

// Login обернений connect(ом) і прокинутий thunk{login}
export default connect(mapStateToProps, { login })(Login);