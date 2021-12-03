import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <div className={s.status}>Status: {this.props.status}</div>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;