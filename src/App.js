import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) =>
      <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres} 
      synopsis={movie.synopsis}
      />
    )
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json')
      .then(potato => potato.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    const { movies } =this.state;  
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}



// 반복문 : 리턴을 넣는 방식
// {movies.map(movie => {
//    return <Movie title={movie.title} poster={movie.poster} />
// })}

export default App;
