/**
 * Created by pusti on 27.08.2017.
 */
import React from 'react';
import s from './File.scss';
import { connect } from 'react-redux';
import {addMany} from '../../../actions/change.api';
import show from '../../../actions/set.message';
import {handleFile} from './files';
import Upload from 'material-ui/svg-icons/file/file-upload';

class File extends React.Component{
    constructor(props) {
        super(props);
        this.state = {canSubmit: false};
        this.send = this.send.bind(this);
    }
    send(film){
        const {dispatch} = this.props;
        dispatch(addMany(film)).then(
            arr=>{
                let stat = arr.reduce((obj,{status}) => {
                    obj[status]++;
                    return obj;
                },{'201':0,'409':0});
                dispatch(show(
                    stat['409']>0?`${stat['201']} films added, ${stat['409']} films duplicated`:`${stat['201']} films added`
                ));
            })
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