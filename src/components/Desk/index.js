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
import ColumnTarget from './ColumnTarget';

const Desk = ({columns}) => (
    <div className={s.container}>
        {
            console.log("columns Desk",columns,this.props)
        }
        {
            columns.map(elem =>
            <div key={elem.id} className={s.column}>
                <Column  name={elem.name} id={elem.id}>
                    {
                        elem.cards.map(card =>
                            <Card key={card.id} name={card.name}/>
                        )
                    }
                </Column>
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