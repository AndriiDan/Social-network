import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/auth-reducer';
import { compose } from 'redux';

class App extends React.Component {

    componentDidMount() {
        // запит на сервер, авторизація
        this.props.getAuthUserData();
    }

    render() {
        return (
            <div className="app-audi" >
                <HeaderContainer />
                <Navbar />
                <div className="app-audi-content">
                    {/* Route - спеціальні компоненти, які слідкують за url (path='/profile'), якщо url підходить, то виконує render */}
                    <Route
                        path='/profile/:userId?'
                        render={() =>
                            <ProfileContainer />} />
                    <Route
                        path='/dialogs'
                        render={() =>
                            <DialogsContainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route
                        path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/friends' component={Friends} />
                    <Route
                        path='/login'
                        render={() => <Login />} />
                </div>
            </div>
        );
    }
}

export default compose(
    // при використанні Route і connect додатково краще обернути withRouter, тому що інколи збиваються роути
    withRouter,
    connect(null, { getAuthUserData }))(App);