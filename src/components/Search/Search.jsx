import React, { useState, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import axios from 'axios';

function Search() {
  const [movies, setMovies] = useState([]);
  const getAllMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ad23534ce1d6c292c4d730c2c010223b&language=ar-eg`);
    setMovies(response.data.results)
  }
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ad23534ce1d6c292c4d730c2c010223b&language=ar-eg&query=${word}`);
      setMovies(response.data.results)
    }
  }
  useEffect(() => {
    getAllMovies();
  }, [])
  const onSearch = (word) => {
    search(word)
  }
  return (
    <>
      <button className="btn btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><BiSearchAlt2 /></button>

      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
              <input type="search" className="form-control me-2" name="search" id="search" placeholder="ابحث فى المكتبة" onChange={(e) => onSearch(e.target.value)} />
            <form className="d-flex" role="search">
              <button className="btn btn-outline-light" type="button"> <BiSearchAlt2 /></button>
            </form>
          </div>
          <div>
            body
          </div>
        </div>
      </div>
    </>
  )
}

export default Search