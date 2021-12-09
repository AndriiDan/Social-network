import React from 'react';
import styles from './FormsControls.module.css';

// ({ input, meta, ...props }) деструкторизація props. В ...props відсутні input, meta.
export const FormControl = ({ input, meta, ...props }) => {
    // умова помилки: якщо була взаємодія з елементом і є помилка (умава валідації)
    const hasError = meta.touched && meta.error;
    return (
        // додає стилі. (hasError ? styles.error : "") - якщо виконується умова помилки, додати styles.error, якщо ні - додати пустий рядок
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {/* підставляє Textarea, Input */}
                {props.children}
            </div>
            {/* якщо виконується умова помилки, показати span. Текст помилки міститься в  meta.error */}
            { hasError && <span>{meta.error}</span>}
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
