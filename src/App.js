// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import BeyondTech from './components/BeyondTech'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <CodingProfiles /> */}
      <Certificates />
      <BeyondTech />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;