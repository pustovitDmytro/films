/**
 * Created by pusti on 23.08.2017.
 */
import React from 'react';
import s from './Menu.scss';
import cx from "classnames";
import PropTypes from 'prop-types';
import Find from './Find';

const Menu = ({num}) => (
    <div className={s.container}>
        <div>Sort</div>
        <div className={s.button}>
            <button>&#8593;</button>
            <button>&#8595;</button>
        </div>
        <Find/>
        <Find/>
        <button>load from file</button>
    </div>
);

export default Menu;