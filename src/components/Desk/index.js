/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Column from '../Column';
import Card from '../Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Desk = ({columns}) => (
    <div>
        {
            console.log("columns Desk",columns,this.props)
        }
        {
            columns.map(elem =>
                <Column key={elem.id} name={elem.name} id={elem.id}>
                    {
                        elem.cards.map(card =>
                            <Card key={card.id} name={card.name}/>
                        )
                    }
                </Column>
            )
        }
    </div>
);

function mapStateToProps (state) {
    return {
        columns: state.columns.columns
    }
}


export default connect(mapStateToProps)(Desk);