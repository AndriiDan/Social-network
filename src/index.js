import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 15 },
  { id: 2, message: 'It\'s my first post.', likesCount: 20 }
]

let dialogs = [
  { id: 1, name: 'Танька' },
  { id: 2, name: 'Сергій' },
  { id: 3, name: 'Толік' },
  { id: 4, name: 'Саша' },
  { id: 5, name: 'Вася' },
  { id: 6, name: 'Dimych' }
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your ReactJS?' },
  { id: 3, message: 'Прогресує.' }
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
