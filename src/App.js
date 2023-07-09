import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
      <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
