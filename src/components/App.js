/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import {getFilms} from '../actions/load.api';
import Desk from './Desk';
import Router from 'universal-router';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const films = this.props.store.getState().films.arrray;
        return (
            <Desk films={films}/>
        );
    }
}

export default App;