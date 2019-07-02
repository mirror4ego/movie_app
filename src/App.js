import React from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
  },
  {
    title: "OldBoy",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
]

function App() {
  return (
    <div className="App">
      {movies.map((movie, index) =>
        <Movie title={movie.title} poster={movie.poster} key={index}/>
      )}
    </div>
  );
}

      // 반복문 : 리턴을 넣는 방식
      // {movies.map(movie => {
      //    return <Movie title={movie.title} poster={movie.poster} />
      // })}

export default App;
