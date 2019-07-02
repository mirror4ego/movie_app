import React from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  "Matrix",
  "Full Metal Jacket",
  "OldBoy",
  "Star Wars"
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
]

function App() {
  return (
    <div className="App">
        <Movie title = {movies[0]} poster = {movieImages[0]}/>
        <Movie title = {movies[1]} poster = {movieImages[1]}/>
        <Movie title = {movies[2]} poster = {movieImages[2]}/>
        <Movie title = {movies[3]} poster = {movieImages[3]}/>
    </div>
  );
}

export default App;
