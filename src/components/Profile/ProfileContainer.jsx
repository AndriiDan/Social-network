import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    // значення з url про id користувача
    let userId = this.props.match.params.userId;
    // якщо url "/profile" відобразити як при "/profile/2"
    if (!userId) {
      userId = 2;
    }

    // запит на сервер, засетити (відобразити) конкретного юзера (userProfile) з сервера
    this.props.getUserProfile(userId)
  }

  render() {
    // перенапрівлення для авторизації при неавторизованому вході
    if (!this.props.isAuth) return <Redirect to="/login" />

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  // запит у state значення isAuth
  isAuth: state.auth.isAuth
});

// Компонента для розпізнавання url
let WithUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlContainerComponent);