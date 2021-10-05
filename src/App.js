// import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (props) => {
    return (
        <div className="app-audi" >
            <Header />
            <Navbar state={props.state.sidebar} />
            <div className="app-audi-content">
                <Route path='/profile'
                    render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />} />
                <Route path='/dialogs'
                    render={() =>
                        <Dialogs
                            state={props.state.dialogsPage}
                            dispatch={props.dispatch} />} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
                <Route path='/friends' component={Friends} />
            </div>
        </div>
    );
}

export default App;