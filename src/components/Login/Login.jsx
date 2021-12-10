import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
    // {props.handleSubmit} приходять з reduxForm "під капотом"
    return <form onSubmit={props.handleSubmit}>
        <div>
            {/* Field замість input, щоб form реагувала на onChange */}
            {/* validate={required} - поле повинно бути заповнено 
            component={Input} - компонент форми Input */}
            <Field placeholder={"Email"} name={"email"}
                validate={required} component={Input} />
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"}
                validate={required} component={Input} type={"password"} />
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
            </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxform = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    // функція, в яку приходять дані з форми. formData - це об'єкт з даними, які були заповнені у form
    const onSubmit = (formData) => {
        // props.login - це callback повернутий connect(ом) після (під час) оброблення thunk{login}
        // з formData дістаємо email, password, rememberMe
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    // якщо в props є isAuth=true, то Redirect на сторінку Profile
    if (props.isAuth) {
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