/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Desk from './Desk';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("App constructor");
    }
    getChildContext() {
        return {films : this.props.store.getState().films.array};
    }
    render() {
        return (
            <MuiThemeProvider>
                <Desk/>
            </MuiThemeProvider>
        );
    }
}
App.childContextTypes = {films: PropTypes.array};

export default App;