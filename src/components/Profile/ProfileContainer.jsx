import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    // значення з url про id користувача
    let userId = this.props.match.params.userId;
    // якщо url "/profile" відобразити як при "/profile/2"
    if (!userId) {
      userId = 2;
    }

    // запит на сервер, засетити (відобразити) конкретного юзера (userProfile) з сервера
    this.props.getUserProfile(userId);

    // запит на сервер, отримати статус конкретного юзера
    this.props.getStatus(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  // запит у state значення profile
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

// слої поверх ProfileContainer, починаючи з низу: withAuthRedirect, withRouter, connect
export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  // для розпізнавання url
  withRouter,
  // для перевірки авторизації. Тимчасово закоментуб, бо при авторизованому вході при F5 перекидує на LOGIN
  // withAuthRedirect,
)(ProfileContainer)