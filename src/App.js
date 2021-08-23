// import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-audi" >
                <Header />
                <Navbar />
                <div className="app-audi-content">
                    <Route path='/profile' component={Profile} />
                    <Route path='/dialogs' component={Dialogs} />

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;