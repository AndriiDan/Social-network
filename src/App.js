// import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
    return (
        <div className="app-audi" >
            <Header />
            <Navbar />
            <div className="app-audi-content">
                {/* Route - спеціальні компоненти, які слідкують за url (path='/profile'), якщо url підходить, то виконує render */}
                <Route
                    path='/profile'
                    render={() =>
                        <Profile />} />
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
            </div>
        </div>
    );
}

export default App;