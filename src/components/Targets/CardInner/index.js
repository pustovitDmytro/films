/**
 * Created by pusti on 09.08.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import s from './CardInner.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(s);

const innerTarget = {
    drop({colId,cardId}, monitor) {
        return {
            type: 'inner',
            colId,
            target: cardId,
        };
    },
    canDrop({colId}, monitor){
        console.log("innerTarget",colId===monitor.getItem().colId);
        return colId===monitor.getItem().colId;
    }
};
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

const Target = ({connectDropTarget, isOver,canDrop}) => connectDropTarget(
    <div className={cx({active: isOver&&canDrop, disabled: !isOver||!canDrop})}></div>
);

Target.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget('CARD', innerTarget, collect)(Target);