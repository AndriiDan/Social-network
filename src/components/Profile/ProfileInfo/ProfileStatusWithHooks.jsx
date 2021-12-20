import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    return (
        <div>
            {
                <div>
                    <span>Status: {props.status || "-----"}</span>
                </div>
            }
            { false &&
                <input autoFocus={true} />
            }
        </div>
    )
}

export default ProfileStatusWithHooks;