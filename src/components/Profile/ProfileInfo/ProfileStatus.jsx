import Redux from 'redux';
import s from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
    return (
        <div>
            <div>
                <div>{props.status}</div>
            </div>
            <div>
                <input value={props.status} />
            </div>
        </div>
    )
}

export default ProfileStatus;