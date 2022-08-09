import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <>
        <Loader />
        <Home />
        <Footer />
        <Navbar />
    </>
  );
}

export default App;
