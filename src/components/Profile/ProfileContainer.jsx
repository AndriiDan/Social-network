import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

// контейнерна компонента над ProfileContainer для перевірки авторизації p HOC withAuthRedirect
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// Компонента для розпізнавання url
let WithUrlContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlContainerComponent);