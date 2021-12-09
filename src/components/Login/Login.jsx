import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
    // {props.handleSubmit} приходять з reduxForm "під капотом"
    return <form onSubmit={props.handleSubmit}>
        <div>
            {/* Field замість input, щоб form реагувала на onChange */}
            {/* validate={required} - поле повинно бути заповнено 
            component={Input} - компонент форми Input */}
            <Field placeholder={"Login"} name={"login"}
                validate={required} component={Input} />
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"}
                validate={required} component={Input} />
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
        // при заповненні і відправленні форми в консолі можна подивитися дані, які були заповнені у form
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxform onSubmit={onSubmit} />
    </div>
}

export default Login;