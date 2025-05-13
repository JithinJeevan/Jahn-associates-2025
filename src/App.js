import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import GalleryPage from './assets/pages/GalleryPage';
import Contact from './assets/pages/Contact';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;