import React from 'react';
import styles from './FormsControls.module.css';

// ({ input, meta, ...props }) деструкторизація props. В ...props відсутні input, meta.
export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={styles.formControl + " " + styles.error}>
            <textarea {...input} {...props} />
        </div>
    )
}