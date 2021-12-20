import React, { useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    // створимо локальний стейт. useState повертає масив з двома елементами [0, 1]
    let stateWithSetState = useState(false);
    // перший елемент масиву [0] - значення editMode. Значення зберігається в React
    let editMode = stateWithSetState[0];
    // другий елемент масиву [1] - функція, яка змінює одиночне значення editMode
    let setEditMode = stateWithSetState[1];

    return (
        <div>
            {/* якщо editMode = false, то показати span */}
            { !editMode &&
                <div>
                    <span>Status: {props.status || "-----"}</span>
                </div>
            }
            {/* якщо editMode = true, то показати input */}
            { editMode &&
                <input autoFocus={true} />
            }
        </div>
    )
}

export default ProfileStatusWithHooks;