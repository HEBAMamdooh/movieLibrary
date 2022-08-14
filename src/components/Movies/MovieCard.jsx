import React from 'react';

function MovieCard({mov}) {
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/`+ mov.poster_path} className='card-img' alt="" />
          <div className="text-center">
            <h5>{mov.original_title}</h5>
            <p>انتاج:{mov.release_date} </p>
            <p>التقييم: {mov.vote_average} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard