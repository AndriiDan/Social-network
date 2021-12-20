import React, { useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);

    // при doubleClick змінить editMode на true  - відобразить input
    const activateEditMode = () => {
        setEditMode(true);
    }

    // при onBlur (знати фокус з input) змінить editMode на false - відобразить span (state)
    const deactivateEditMode = () => {
        setEditMode(false);
    }

    return (
        <div>
            {/* якщо editMode = false, то показати span */}
            { !editMode &&
                <div>
                    {/* при onDoubleClick відображає input */}
                    <span onDoubleClick={activateEditMode}>Status: {props.status || "-----"}</span>
                </div>
            }
            {/* якщо editMode = true, то показати input */}
            { editMode &&
                <div>
                    {/* при onBlur відображає span */}
                    <input autoFocus={true} onBlur={deactivateEditMode} />
                </div>
            }
        </div >
    )
}

export default ProfileStatusWithHooks;