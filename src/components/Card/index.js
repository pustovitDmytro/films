/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Input from '../Input';
import s from './Card.scss';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from "classnames";
import deleteCard from '../../actions/deleteCard';
import renameCard from '../../actions/renameCard';
import {moveCardInner, moveCardOuter} from '../../actions/moveCard';

const Source = {
    beginDrag({cardId,colId}) {
        return {cardId,colId};
    },
    endDrag({dispatch,cardId,colId}, monitor) {

        const dropResult = monitor.getDropResult();

        if (dropResult&&dropResult.type==='inner') {
            console.log("dropResult-inner",dropResult);
            dispatch(moveCardInner(colId, cardId, dropResult.target));
        }
        else if (dropResult&&dropResult.type==='outer') {
            console.log("dropResult-outer",dropResult);
            dispatch(moveCardOuter(colId, cardId, dropResult.target));
        }
    }
};
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Card extends React.Component {
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
        const {dispatch,cardId,colId} = this.props;
        dispatch(deleteCard(colId,cardId));
    }
    onRename() {
        this.setState({edit: !this.state.edit});
    }
    render() {
        const {name,connectDragSource, isDragging,cardId,colId} = this.props;
        return connectDragSource(
            <div className={s.card}>
                {(!this.state.edit)
                    ? <h5 className={s.title}>{name}</h5>
                    : <Input func={renameCard} placeholder="Input new name.." params={{colId,cardId}}/>
                }
                <nav className={s.toolbar}>
                    <button className={cx(s.button, s.edit)} onClick={this.onRename}/>
                    <button className={cx(s.button, s.delete)} onClick={this.onDelete}/>
                </nav>
            </div>
        );
    }
}

export default connect()(DragSource('CARD', Source, collect)(Card));
