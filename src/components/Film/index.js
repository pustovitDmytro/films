/**
 * Created by pusti on 23.08.2017.
 */
import React from 'react';
import s from './Film.scss';
import unknown from './film.jpg';
import cx from "classnames";
import PropTypes from 'prop-types';

const Film = ({title, src, year, format, stars}) => (
    <div className={s.container}>
        <img className={s.photo} src={src||unknown}/>
        <h2>{title}</h2>
        <h4>Release year: {year}</h4>
    </div>
);

export default Film;