import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.state.editMode = true;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span className={s.status} onDoubleClick={this.activateEditMode}>Status: {this.props.status}</span>
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