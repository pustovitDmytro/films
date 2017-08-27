/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import s from './Desk.scss';
import Film from '../Film';
import Menu from '../Menu';
import AddFilm from '../AddFilm'
import { connect } from 'react-redux';

const Desk = ({films}) => (
    <div className={s.container}>
        <Menu num={films.length}/>
        <div className={s.cards}>
            {
                films.map(({_id,title,src,year,stars,format},i) =>
                    <div key={i} className={s.card}>
                        <Film
                            title={title}
                            id={_id}
                            year={year}
                            stars={stars}
                            format={format}
                            src={src}/>
                    </div>)
            }
            <div className={s.card}>
                <AddFilm/>
            </div>
        </div>
    </div>
);
function mapStateToProps (state) {
    return {
        films: state.films.array
    }
}
export default connect(mapStateToProps)(Desk);