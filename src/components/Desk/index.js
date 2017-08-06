/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';

const Desk = ({columns}) => (
    <div>
        {
            columns.map(elem=>
                <Column key={elem.id}>
                    elem.cards.map(card=>
                    <Card key={card.id}/>
                    )
                </Column>
            )
        }
    </div>
);

export default Desk;