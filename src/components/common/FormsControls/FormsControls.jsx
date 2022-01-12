import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControls.module.css';

// ({ input, meta, ...props }) деструкторизація props. В ...props відсутні input, meta.
export const FormControl = ({ input, meta: { touched, error }, children, ...props }) => {
    // умова помилки: якщо була взаємодія з елементом і є помилка (умава валідації)
    const hasError = touched && error;
    return (
        // додає стилі. (hasError ? styles.error : "") - якщо виконується умова помилки, додати styles.error, якщо ні - додати пустий рядок
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {/* підставляє Textarea, Input */}
                {children}
            </div>
            {/* якщо виконується умова помилки, показати span. Текст помилки міститься в  meta.error */}
            { hasError && <span>{error}</span>}
        </div>
    )
}

// ...restProps залишкові пропси (без input, meta)
export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

// ...restProps залишкові пропси (без input, meta)
export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    // Field замість input, щоб form реагувала на onChange 
    // validate={required} - поле повинно бути заповнено 
    //         component={Input} - компонент форми Input 
    // {...props} - деструктуризація буде заганяти далі
    <div>
        <Field placeholder={placeholder} name={name}
            validate={validators} component={component} {...props} />{text}
    </div>
)