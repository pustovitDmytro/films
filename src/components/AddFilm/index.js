/**
 * Created by pusti on 25.08.2017.
 */
import React from 'react';
import Input from '../Input';
import Formsy from 'formsy-react';
class AddFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {form:false,canSubmit: false};
        this.showform = this.showform.bind(this);
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
    showform(){
        this.setState({form: !this.state.form});
    }
    render() {
        return (
            <div className={s.container}>
                {
                    (!this.state.form) ?
                        <button className={s.add} onClick={this.showform()}/> :
                        <Formsy.Form
                            className={s.form}
                            onValidSubmit={this.submit}
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}>
                            <Input
                                type="text"
                                name="title"
                                validations="isAlpha"
                                placeholder={"Input film title"}
                                required/>
                            <Input
                                type="text"
                                name="format"
                                validations="isAlpha"
                                placeholder={"Format"}
                                required/>
                            <Input
                                type="text"
                                name="year"
                                validations="isAlpha"
                                placeholder={"Release year"}
                                required/>
                            <Input
                                type="text"
                                name="stars"
                                validations="isAlpha"
                                placeholder={"Stars"}
                                required/>
                            <div className={s.buttons}>
                                <button className={s.button} onClick={this.showform()}>Cancel</button>
                                <input
                                    className={s.button}
                                    name="button"
                                    type="submit"
                                    disabled={!this.state.canSubmit}>
                                    Submit
                                </input>
                            </div>
                        </Formsy.Form>
                }
            </div>
        );
    }
}

export default AddFilm;