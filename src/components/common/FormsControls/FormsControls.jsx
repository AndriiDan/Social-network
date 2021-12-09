import React from 'react';
import styles from './FormsControls.module.css';

// ({ input, meta, ...props }) деструкторизація props. В ...props відсутні input, meta.
export const Textarea = ({ input, meta, ...props }) => {
    // умова помилки: якщо була взаємодія з елементом і є помилка (умава валідації)
    const hasError = meta.touched && meta.error;
    return (
        // додає стилі. (hasError ? styles.error : "") - якщо виконується умова помилки, додати styles.error, якщо ні - додати пустий рядок
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {/* якщо виконується умова помилки, показати span. Текст помилки міститься в  meta.error */}
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

// ({ input, meta, ...props }) деструкторизація props. В ...props відсутні input, meta.
export const Input = ({ input, meta, ...props }) => {
    // умова помилки: якщо була взаємодія з елементом і є помилка (умава валідації)
    const hasError = meta.touched && meta.error;
    return (
        // додає стилі. (hasError ? styles.error : "") - якщо виконується умова помилки, додати styles.error, якщо ні - додати пустий рядок
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {/* якщо виконується умова помилки, показати span. Текст помилки міститься в  meta.error */}
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}