/**
 * Created by pusti on 07.08.2017.
 */
/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import s from './Input.scss';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.nameChange = this.nameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    nameChange(event) {
        this.setState({name: event.target.value});
    }
    handleSubmit(event) {
        const { dispatch, params, func } = this.props;
        const name  = this.state.name;
        if (name){
            console.log("submit", name);
            dispatch(func(name,params));
            this.setState({name: ''});
        }
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form className={s.form} onSubmit={this.handleSubmit}>
                    <input
                        className={s.text}
                        type="text"
                        placeholder={this.props.placeholder}
                        value={this.state.name}
                        onChange={this.nameChange}/>
                </form>
            </div>
        )
    }
};
export default connect()(AddItem);
