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

    // оновлення статуса при зміні props (синхронізація локального і глобального state)
    componentDidUpdate(prevProps, prevStatus) {
        // якщо попередній статус не рівний прийшовшому з пропсів, то
        if (prevProps.status !== this.props.status) {
            // засетити статус рівний статусу з пропсів
            this.setState({
                status: this.props.status
            });
        }
    }


    render() {
        return (
            <div>
                {/* якщо editMode: false - відобразить Status */}
                {!this.state.editMode &&
                    <div>
                        {/* відобразити this.props.status, якщо немає, то відобразити "-----" */}
                        <span className={s.status} onDoubleClick={this.activateEditMode}>Status: {this.props.status || "-----"}</span>
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