import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Loader from './components/Loader/Loader';
import MoviesList from './components/Movies/MoviesList';
import Navbar from './components/Navbar';


function App() {
  // getAllMovies
  const [movies, setMovies] = useState([]);
  const getAllMovies = async ()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ad23534ce1d6c292c4d730c2c010223b&language=ar-eg`);
    setMovies(response.data.results)
  }

useEffect( () => {
  getAllMovies();
}, [])
  return (
    <>
        {/* <Loader /> */}
        <Home />
        <MoviesList movies={movies}/>
        <Footer />
    </>
  );
}

export default App;
