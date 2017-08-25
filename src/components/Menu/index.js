/**
 * Created by pusti on 23.08.2017.
 */
import React from 'react';
import s from './Menu.scss';
import cx from "classnames";
import PropTypes from 'prop-types';
import sortFilm from '../../actions/sort.films';
import Find from './Find';

const sort = (order) => () => sortFilm(order,"title");

const Menu = ({num}) => (
    <div className={s.container}>
        <div>Sort</div>
        <div className={s.button}>
            <button onClick={sort(true)}>&#8593;</button>
            <button onClick={sort(false)}>&#8595;</button>
        </div>
        <Find field="title" placeholder="input title"/>
        <Find field="stars" placeholder="input stars"/>
        <button>load from file</button>
    </div>
);

export default Menu;