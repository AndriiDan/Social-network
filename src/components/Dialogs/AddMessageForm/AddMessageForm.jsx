import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

// константа для максимальної довжини в 50 символів 
const maxLength50 = maxLengthCreator(50);

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

export default AddMessageFormRedux;