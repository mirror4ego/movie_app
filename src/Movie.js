import React from 'react';
import './Movie.css';

function Movie(props) {
    return (
        <div>
            <MoviePoster />
            <h1>{props.title}</h1>
        </div>        
    );
};

function MoviePoster() {
    return (
        <img src="https://upload.wikimedia.org/wikipedia/en/1/12/Catching-Fire_poster.jpg" />   
    )
}

export default Movie;