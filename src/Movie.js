import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

var Movie = (props) => {

    Movie.propTypes = {
        title: PropTypes.number,
        poster: PropTypes.number
    };

    return (
        <div>
            <MoviePoster poster = {props.poster} />
            <h1>{props.title}</h1>
        </div>        
    );
};

var MoviePoster = (props1) => {
    return (
        <img src={props1.poster} alt="Movie!!"/>   
    )
}

export default Movie;