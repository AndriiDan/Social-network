import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>{this.props.status}</div>
                </div>
                <div>
                    <input value={this.props.status} />
                </div>
            </div>
        )
    }
}

export default ProfileStatus;