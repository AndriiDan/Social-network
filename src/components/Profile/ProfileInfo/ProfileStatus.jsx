import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    // значення за замовчуванням
    state = {
        editMode: false,
        // значення приходить з props
        status: this.props.status
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
        // оновити status, надіславши значення з local state
        this.props.updateStatus(this.state.status);
    }

    // подія, значення з input засетить в статус локального стейта
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
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
                        <input onChange={this.onStatusChange} onFocus={this.handleFocus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;