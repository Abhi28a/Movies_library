import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Library from './pages/Library';
import Footer from './pages/Footer';

function App() {
  const ids = [
    "nm0000093",
    "aw0000016",
    "ev0000003",
    "rm2207150849",
    "rm3197006593",
    // Add more IDs as needed
  ];

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library ids={ids} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
