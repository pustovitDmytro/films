/**
 * Created by pusti on 09.08.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import s from './CardInner.scss';

const innerTarget = {
    drop({colId,cardId}, monitor) {
        return {
            type: 'inner',
            colId,
            target: cardId,
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
    <div className={s.target}></div>
);

Target.propTypes = {
    isOver: PropTypes.bool.isRequired
};

export default DropTarget('CARD', innerTarget, collect)(Target);