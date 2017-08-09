/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Input from '../Input';

const Card = ({name,id}) => (
  <div>
    <p>{name}</p>
    <span>{id}</span>
  </div>
);

export default Card;
