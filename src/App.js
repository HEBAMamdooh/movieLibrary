import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <>
        {/* <Loader /> */}
        <Home />
        <Footer />
    </>
  );
}

export default App;
