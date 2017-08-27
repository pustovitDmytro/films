import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import {getFilms} from './actions/load.api';

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

async function load() {
    await Promise
        .all([
            store.dispatch(getFilms())
        ]);
    render(<Provider store={store}>
        <App store={store}/>
    </Provider>, document.getElementById('root'));
}

load();
