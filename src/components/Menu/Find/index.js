/**
 * Created by pusti on 24.08.2017.
 */
import React from 'react';
import s from './Find.scss';
import cx from "classnames";
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import Input from '../../Input';

class Find extends React.Component{
    constructor(props) {
        super(props);
        this.state = {canSubmit: false};
        this.submit=this.submit.bind(this);
        this.enableButton=this.enableButton.bind(this);
        this.disableButton=this.disableButton.bind(this);
    }
    enableButton(){
        this.setState({
            canSubmit: true
        });
    }
    disableButton() {
        this.setState({
            canSubmit: false
        });
    }
    submit(model) {
        console.log("submit",model);
    }
    render() {
        return (
                <Formsy.Form
                    className={s.form}
                    onValidSubmit={this.submit}
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}>
                    <Input
                        type="text"
                        name="name"
                        validations="isAlpha"
                        placeholder={"text text"}
                        required/>
                    <input
                        className={s.submit}
                        name="button"
                        type="submit"
                        disabled={!this.state.canSubmit}/>
                </Formsy.Form>
        );
    }
}
export default Find;