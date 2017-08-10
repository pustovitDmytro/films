/**
 * Created by pusti on 09.08.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import s from './CardOuter.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(s);

const outerTarget = {
    drop({colId}, monitor) {
        return {
            type: "outer",
            target: colId,
        };
    },
    canDrop({colId}, monitor){
        return colId!==monitor.getItem().colId;
    }
};
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
};

const Target = ({children, connectDropTarget, isOver}) => connectDropTarget(
    <div className={cx(s.container,{active: isOver})}>
        {children}
    </div>
);

Target.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget('CARD', outerTarget, collect)(Target);