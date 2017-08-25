/**
 * Created by pusti on 23.08.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'universal-router';

const routes = [
    { path: '/one', action: () => <h1>Page One</h1> },
    { path: '/two', action: () => <h1>Page Two</h1> },
    { path: '*', action: () => <h1>Not Found</h1> }
];

const router = new Router(routes);

router.resolve({ path: '/one' }).then(component => {
    ReactDOM.render(component, document.body);
    // renders: <h1>Page One</h1>
});