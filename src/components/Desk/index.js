/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import s from './Desk.scss';
import Film from '../Film';
import Menu from '../Menu';
import AddFilm from '../AddFilm';

const Desk = ({films}) => (
    <div>
        <Menu num={films.length}/>
    <div className={s.container}>
        {
            films.map(({title,src,year,stars,format},i) =>
            <div key={i} className={s.column}>
                <Film
                    title={title}
                    year={year}
                    stars={stars}
                    format={format}
                    src={src}/>
            </div>)
        }
        <AddFilm/>
    </div>
    </div>
);

export default Desk;