import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from "./redux/redux-store";
import { withSuspense } from './hoc/withSuspense';

// Ці компонент завантажуються динамічно
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {

    componentDidMount() {
        // запит на сервер, авторизація
        this.props.initializeApp();
    }

    render() {
        // якщо не ініціалізовано, то відобразити крутилку
        if (!this.props.initialized) {
            return <Preloader />
        }

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
                        // withSuspense - hoc, який обгортає навколо DialogsContainer <React.Suspense fallback={<div>Loading...</div>}> для lazy loading
                        render={withSuspense(DialogsContainer)} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route
                        path='/users'
                        // withSuspense - hoc, який обгортає навколо UsersContainer <React.Suspense fallback={<div>Loading...</div>}> для lazy loading
                        render={withSuspense(UsersContainer)} />
                    <Route path='/friends' component={Friends} />
                    <Route
                        path='/login'
                        render={() => <Login />} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (state) => ({
    // значення чи успішна ініціалізація initialized (true, false)
    initialized: state.app.initialized
})

let AppContainer = compose(
    // при використанні Route і connect додатково краще обернути withRouter, тому що інколи збиваються роути
    withRouter,
    connect(mapDispatchToProps, { initializeApp }))(App);

// для проходження теста урок 92 створив контейнери AppContainer, SamuraiJSApp над App
const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp;