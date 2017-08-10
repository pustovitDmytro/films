/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Column from '../Column';
import Card from '../Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddColumn from '../AddColumn';
import s from './Desk.scss';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ColumnTarget from '../Targets/Column';
import CardInner from '../Targets/CardInner';
import CardOuter from '../Targets/CardOuter';


const Desk = ({columns}) => (
    <div className={s.container}>
        <ColumnTarget column={0}/>
        {
            columns.map(elem =>
            <div key={elem.id} className={s.column}>
                <CardOuter colId={elem.id}>
                <Column name={elem.name} id={elem.id} >
                    <CardInner colId={elem.id} cardId={0}/>
                    {
                        elem.cards.map(card =>
                        <div key={card.id}>
                            <Card  name={card.name} colId={elem.id} cardId={card.id}/>
                            <CardInner colId={elem.id} cardId={card.id}/>
                        </div>
                        )
                    }
                </Column>
                    </CardOuter>
                <ColumnTarget column={elem.id}/>
            </div>
            )
        }
        <AddColumn/>
    </div>
);

function mapStateToProps (state) {
    return {
        columns: state.columns.columns
    }
}

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(Desk));