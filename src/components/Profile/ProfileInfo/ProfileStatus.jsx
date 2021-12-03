import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    // значення за замовчуванням
    state = {
        editMode: false
    }

    // зміна значення editMode при onDoubleClick
    activateEditMode = () => {
        console.log(this.state.editMode);

        this.setState({
            editMode: true
        });

        console.log(this.state.editMode);

    }

    render() {
        return (
            <div>
                {/* якщо editMode: false - відобразить Status */}
                {!this.state.editMode &&
                    <div>
                        <span className={s.status} onDoubleClick={this.activateEditMode}>Status: {this.props.status}</span>
                    </div>
                }
                {/* якщо editMode: true - відобразить input */}
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