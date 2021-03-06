import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    // HOOK для зміни span-input для статуса
    let [editMode, setEditMode] = useState(false);

    // HOOK для зміни статуса
    let [status, setStatus] = useState(props.status);

    // HOOK виконує функцію після відмалювання компоненти
    useEffect(() => {
        setStatus(props.status);
        // залежність від props.status. При зміні props.status повторно виконати useEffect
    }, [props.status])

    // при doubleClick змінить editMode на true  - відобразить input
    const activateEditMode = () => {
        setEditMode(true);
    }

    // при onBlur (знати фокус з input) змінить editMode на false - відобразить span (state)
    const deactivateEditMode = () => {
        setEditMode(false);
        // оновлення статуса на сервері
        props.updateStatus(status);
    }

    // подія, значення з input засетить в статус локального стейта (зберігається в React)
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    // виділення тексту в input при doubleClick по status
    const handleFocus = (event) => {
        event.target.select()
    }

    return (
        <div>
            {/* якщо editMode = false, то показати span */}
            { !editMode &&
                <div>
                    {/* при onDoubleClick відображає input; '||' означає 'АБО' = {props.status || "-----"} */}
                    <span onDoubleClick={activateEditMode}>Status: {props.status || "-----"}</span>
                </div>
            }
            {/* якщо editMode = true, то показати input */}
            { editMode &&
                <div>
                    {/* при onBlur відображає span */}
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} onFocus={handleFocus} />
                </div>
            }
        </div >
    )
}

export default ProfileStatusWithHooks;