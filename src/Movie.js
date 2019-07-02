import React from 'react';
import './Movie.css';

function Movie(props) {
    return (
        <div>
            <MoviePoster poster = {props.poster} />
            <h1>{props.title}</h1>
        </div>        
    );
};

function MoviePoster(props) {
    return (
        <img src={props.poster} />   
    )
}

export default Movie;