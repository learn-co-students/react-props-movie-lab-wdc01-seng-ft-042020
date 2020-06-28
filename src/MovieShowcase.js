import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => (
    // map over your movieData array and return an array of the correct JSX
    movieData.map(m => <MovieCard key={m.title} title={m.title} genres={m.genres} IMDBRating={m["IMDBRating"]} poster={m.poster}/>)
)

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
