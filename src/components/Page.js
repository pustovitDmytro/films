/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import setColumns from '../actions/init';
import Desk from './Desk';

function action({store}) {
    // await Promise
    //     .all([store.dispatch(setColumns())])
    //     .then(values => console.log("success",values.length))
    //     .catch(e => console.log("Error during request",e));
    // const columns=store.getState().colums;
    // console.log(columns);
    return <Desk columns={[]}/>
}

export default action;