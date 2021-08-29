// import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post.', likesCount: 20 }
    ]

    return (
        <BrowserRouter>
            <div className="app-audi" >
                <Header />
                <Navbar />
                <div className="app-audi-content">
                    <Route path='/profile' render={() => <Profile posts={posts} />} />
                    <Route path='/dialogs' render={() => <Dialogs />} />

                    {/* <Route path='/profile' component={Profile} />
                    <Route path='/dialogs' component={Dialogs} /> */}
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;