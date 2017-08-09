/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import AddCard from '../AddCard';
import s from './Column.scss';
import cx from "classnames";
import deleteColumn from '../../actions/deleteColumn';
import renameColumn from '../../actions/renameColumn';
import moveColumn from '../../actions/moveColumn';
import { connect } from 'react-redux';
import Input from '../Input';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';

const Source = {
    beginDrag(props) {
        return {};
    },
    endDrag(props, monitor) {

        const dropResult = monitor.getDropResult();

        if (dropResult) {
            console.log(props,dropResult);
            props.dispatch(moveColumn(props.id,dropResult.id));
        }
    }
};
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
        this.onDelete = this.onDelete.bind(this);
        this.onRename = this.onRename.bind(this);
    }
    componentWillReceiveProps(){
        this.setState({edit: false});
    }
    onDelete() {
        const {dispatch,id} = this.props;
        dispatch(deleteColumn(id));
    }
    onRename() {
        this.setState({edit: !this.state.edit});
    }
    render() {
        const {name, id, children,connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div className={s.column}>
                <div className={s.header}>
                {(!this.state.edit)
                    ? <h3 className={s.title}>{name}</h3>
                    : <Input func={renameColumn} placeholder="Input new name.." params={{id: id}}/>
                }
                <nav>
                    <button className={cx(s.button, s.edit)} onClick={this.onRename}/>
                    <button className={cx(s.button, s.delete)} onClick={this.onDelete}/>
                </nav>
                </div>
                {
                    children
                }
                <AddCard colId={id}/>
            </div>
        );
    }
}

Column.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default connect()(DragSource('COLUMN', Source, collect)(Column));
