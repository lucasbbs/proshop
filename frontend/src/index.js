import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';
// import rootReducer from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(ReduxPromise)
//     // other store enhancers if any
//   )
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
