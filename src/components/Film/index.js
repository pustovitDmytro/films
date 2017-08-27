/**
 * Created by pusti on 23.08.2017.
 */
import React from 'react';
import s from './Film.scss';
import { connect } from 'react-redux';
import unknown from './film.jpg';
import cx from "classnames";
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {deleteFilm} from '../../actions/change.api';

class Film extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };

    delete = () => {
        const {dispatch,id}=this.props;
        dispatch(deleteFilm(id));
    };

    render() {
        const {title, src, year, format, stars}= this.props;
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={title}
                    subtitle={year+" year"}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardMedia
                    expandable={true}
                    overlay={
                        <CardTitle
                            title={title}
                            subtitle={year+" year"}
                        />
                    }
                >
                    <img src={src||unknown} alt={title} />
                </CardMedia>
                <CardTitle title={`${title} (${year})`} subtitle={`available on ${format}`} expandable={true} />
                <CardText expandable={true}>
                    In the film {title}, launched in {year} a brilliant play of actors: {stars} has been marked by all famous critics.
                    This film is available on {format} at our <a href="/">site</a>
                </CardText>
                <CardActions>
                    <FlatButton label="Expand" onClick={this.handleExpand} />
                    <FlatButton label="Reduce" onClick={this.handleReduce} />
                    <FlatButton label="Delete" onClick={this.delete} />
                </CardActions>
            </Card>
        );
    }
}
export default connect()(Film);