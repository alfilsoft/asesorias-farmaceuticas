import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container home-container">
      <h1>Welcome to AsesoríasFarmacéuticas.com</h1>
      <p>
        We provide pharmaceutical consulting services to help you with your regulatory processes, formulation development, and medical cannabis consulting needs.
      </p>
      <Link to="/services" className="btn">Explore Our Services</Link>
      <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
    </div>
  );
};

export default LandingPage;
