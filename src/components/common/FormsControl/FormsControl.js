import React from 'react';

// ({ input, meta, ...props }) деструкторизація props. В ...props відсутні input, meta.
export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div>
            <textarea {...input} {...props} />
        </div>
    )
}