/**
 * Created by pusti on 27.08.2017.
 */
import React from 'react';
import s from './File.scss';
import { connect } from 'react-redux';
import {addMany} from '../../../actions/change.api';
import {handleFile} from './files';
import Upload from 'material-ui/svg-icons/file/file-upload';

class File extends React.Component{
    constructor(props) {
        super(props);
        this.state = {canSubmit: false};
        this.send = this.send.bind(this);
    }
    send(film){
        return this.props.dispatch(addMany(film));
    }
    render() {
        return (
            <div>
                <input type="file" name="file" id="file" onChange={handleFile(this.send)} className={s.input}/>
                <label htmlFor="file" className={s.label}>
                    <Upload/>
                </label>
                </div>
        );
    }
}
export default connect()(File);