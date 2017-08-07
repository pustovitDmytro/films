/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import setColumns from '../actions/init';
import Desk from './Desk';
import PropTypes from 'prop-types';

function initColumns(store){
    store.dispatch(setColumns());
    const columns=store.getState().columns.columns;
    console.log("columns",columns);
    return columns;
}
class App extends React.Component {
    constructor(props) {
        super(props);
        initColumns(props.store);
    }
    getChildContext() {
        return {columns: this.props.store.getState().columns.columns};
    }
    render() {
        return (
            <div>
                <Desk/>
            </div>
        );
    }
}
App.childContextTypes = {columns: PropTypes.array};

export default App;