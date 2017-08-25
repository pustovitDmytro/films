/**
 * Created by pusti on 24.08.2017.
 */
import {HOC} from 'formsy-react';
import React from 'react';
import s from './Input.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(s);

class SimpleInput extends React.Component {
    constructor(props){
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }
    changeValue(event) {
        this.props.setValue(event.currentTarget.value);
    }
    render() {
        const {type,getValue,placeholder,isValid,name,style} = this.props;
        return (
            <input
                className={cx(
                    {style: style!==undefined},
                    {valid: isValid()},
                    {invalid: !isValid()},
                    {normal: getValue()===undefined}
                )}
                name={name}
                type={type}
                value={getValue()}
                placeholder={placeholder}
                onChange={this.changeValue}/>
        )
    };
}
export default HOC(SimpleInput);