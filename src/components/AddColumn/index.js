/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Input from '../Input';
import action from '../../actions/addColumn';
const AddColumn = ()=>(
    <Input func={action} placeholder="Add new column.."/>
)

export default AddColumn;