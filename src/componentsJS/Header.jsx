import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCSS/Header.css';
// import Hamburger from '../componentsJS/Hamburger';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  

  return (
    <header className="header">
      {/* <Hamburger className="hamburger"/> */}
      
      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/whiteLogo.svg`}
        className="App-logo"
        alt="logo"
      />
      
      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/home.png`}
        className="home-icon"
        alt="logo"
        onClick={() => navigate('/menu')} 
      />

      
      <button
        className="back-homeNav"
        onClick={() => navigate('/menu')} // ניווט לעמוד הבית
      >
      </button>

    
    </header>
  );
}

export default Header;
