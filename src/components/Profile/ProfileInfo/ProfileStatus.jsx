import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    // значення за замовчуванням
    state = {
        editMode: false
    }

    // зміна значення editMode при onDoubleClick - фокус на елемент
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    // зміна значення editMode при onBlur - перехід фокуса в інше місце
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    // виділення тексту в input при doubleClick по status
    handleFocus = (event) => { event.target.select() }

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
                        <input onFocus={this.handleFocus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;