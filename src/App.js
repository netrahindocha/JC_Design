import './App.css';
import React from 'react'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Loginpage from './components/Loginpage';

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/loginpage" element={<Loginpage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    </>
  );
}

export default App;
