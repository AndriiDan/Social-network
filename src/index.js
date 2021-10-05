import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// rerenderEntireTree відмальвує App кожного разу, коли в store(state) відбулися зміни 
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            {/* Все, що в середині BrowserRouter може переключатися (підключати різні зсилки, змінювати url) без перезавантаження сторінки */}
            <BrowserRouter>
                <App state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// виклик функції, зробити перше відмалювання
rerenderEntireTree(store.getState());
store.subscribe(() => {
    // беремо в store значення state
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
