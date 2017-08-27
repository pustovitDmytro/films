/**
 * Created by pusti on 23.08.2017.
 */
import React from 'react';
import s from './Menu.scss';
import cx from "classnames";
import PropTypes from 'prop-types';
import Find from './Find';
import File from './File';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import unknown from './unknown.png';
import Sort from './Sort';


const Menu = ({num,src,user}) => (
    <Toolbar className={s.container}>
        <ToolbarGroup>
            <Avatar src={src||unknown} />
            <ToolbarTitle text={`${user||'User'}, ${num} films`}/>
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
            <Sort/>
            <Find field="title" placeholder="input title"/>
            <Find field="stars" placeholder="input stars"/>
            <File/>
        </ToolbarGroup>
    </Toolbar>
);

export default Menu;