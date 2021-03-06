import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducertop from './reducers';

// debugger;
const store = createStore(reducertop,applyMiddleware(thunkMiddleware));
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
