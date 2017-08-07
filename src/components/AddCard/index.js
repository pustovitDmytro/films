/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Input from '../Input';
import action from '../../actions/addCard';
const AddCard = ({colId})=>(
    <Input func={action} params={{colId:colId}} placeholder="Add new card.."/>
)

export default AddCard;
