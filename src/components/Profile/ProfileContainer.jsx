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

      // мій Id на social-network.samuraijs.com
      // userId = 20926;
      // userId береться з авторизаційних даних
      userId = this.props.authorizedUserId;
      // якщо і в authorizedUserId немає userId, то зробити Redirect через history.push
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    // запит на сервер, засетити (відобразити) конкретного юзера (userProfile) з сервера
    this.props.getUserProfile(userId);

    // запит на сервер, отримати статус конкретного юзера
    this.props.getStatus(userId)
  }

  render() {

    // вивести в консоль кожний запуск mapStateToProps; урок 82
    console.log('RENDER PROFILE')

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {

  // вивести в консоль кожний запуск mapStateToProps; урок 82
  console.log('mapStateToProps PROFILE');

  return ({
    // запит у state значення profile
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  })
}

// слої поверх ProfileContainer, починаючи з низу: withAuthRedirect, withRouter, connect
export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  // для розпізнавання url
  withRouter,
  // для перевірки авторизації. Тимчасово закоментуб, бо при авторизованому вході при F5 перекидує на LOGIN
  // withAuthRedirect,
)(ProfileContainer)