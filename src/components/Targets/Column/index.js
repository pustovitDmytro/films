/**
 * Created by pusti on 07.08.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import s from './Column.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(s);

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

const Target = ({connectDropTarget, isOver}) => connectDropTarget(
    <div className={cx({active: isOver, disabled: !isOver})}>
        {
            console.log("isOver",isOver)
        }
    </div>
);

Target.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget('COLUMN', columnTarget, collect)(Target);