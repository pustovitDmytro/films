/**
 * Created by pusti on 07.08.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import s from './ColumnTarget.scss';

const columnTarget = {
    drop(props, monitor) {
        return {
            id: props.column
        };
    }
};
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

const Target = ({column, connectDropTarget, isOver}) => connectDropTarget(
    <div className={s.columnTarget}></div>
);

Target.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget('COLUMN', columnTarget, collect)(Target);