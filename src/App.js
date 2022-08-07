import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Routes>
        <Navbar />

        <Footer />
      </Routes>
    </>
  );
}

export default App;
