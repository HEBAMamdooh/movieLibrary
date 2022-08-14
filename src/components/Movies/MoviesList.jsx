import React from 'react';
import MovieCard from './MovieCard';

function MoviesList({movies}) {
  return (
    <>
      <div className="container">
        <div className="row">
          {movies.length >= 1 ? (
            movies.map( (mov) => {
              return (<MovieCard key={mov.id} mov={mov} /> )
            })
          ): <h1>NoMoviesAvailable</h1>}
        </div>
      </div>
    </>
  )
}

export default MoviesList