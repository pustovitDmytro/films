/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import AddCard from '../AddCard';

const Column = ({name,id,children}) => (
  <div>
    <p>{name}</p>
    {
      children
    }
    <AddCard colId={id}/>
  </div>
);

export default Column;
