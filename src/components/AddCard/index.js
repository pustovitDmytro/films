/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import add from '../../actions/addCard';

class AddCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.nameChange = this.nameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    nameChange(event) {
        this.setState({name: event.target.value});
    }
    handleSubmit(event) {
        const { dispatch,colId } = this.props;
        const name  = this.state.name;
        if (name){
            console.log("submit", name);
            dispatch(add(name,colId));
            this.setState({name: ''});
        }
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add card"
                        value={this.state.name}
                        onChange={this.nameChange}/>
                </form>
            </div>
        )
    }
};
export default connect()(AddCard);
