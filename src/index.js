import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import {getFilms} from './actions/load.api';
import Router from 'universal-router';

const routes = [
    { path: '/one', action: () => <Provider store={store}>
        <App store={store}/>
    </Provider> },
    { path: '/two', action: () => <h1>Page Two</h1> },
    { path: '*', action: () => <h1>Not Found</h1> }
];

const makeRequest = async (store) => {
    await store.dispatch(getFilms());
    console.log("request");
};

const loggerMiddleware = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
const route = {
    path: '/one',
    async action() {
        console.log('middleware: start',store);
        //const store = context.store;
        await store.dispatch(getFilms());
        console.log('middleware: end',store.getState());
        return <Provider store={store}>
            <App store={store}/>
        </Provider>;
    }
};
const router = new Router(route);
router.resolve({ path: '/one' })
    .then(component=>render(component, document.getElementById('root')));
