/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Desk from './Desk';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    getChildContext() {
        return {films : this.props.store.getState().films.array};
    }
    render() {
        return (
            <Desk/>
        );
    }
}
App.childContextTypes = {films: PropTypes.array};
export default App;