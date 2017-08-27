/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Desk from './Desk';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Error from './Error';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    getChildContext() {
        return {films : this.props.store.getState().films.array};
    }
    render() {
        const apiError = this.props.store.getState().films.error;
        return (
            <MuiThemeProvider>
                {
                    apiError ?
                        <Error message="looks like external API didn't respond..."/>
                        :
                        <Desk/>
                }
            </MuiThemeProvider>
        );
    }
}
App.childContextTypes = {films: PropTypes.array};

export default App;