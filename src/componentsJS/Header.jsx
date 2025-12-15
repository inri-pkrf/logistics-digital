import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../componentsCSS/Header.css';

import Hamburger from '../componentsJS/Hamburger';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const enterFullscreen = async () => {
    const elem = document.documentElement;

    try {
      // כניסה / יציאה ממסך מלא
      if (!document.fullscreenElement) {
        await elem.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }

      // ניסיון לנעילת Landscape (בעיקר מובייל)
      if (window.screen?.orientation?.lock) {
        await window.screen.orientation.lock('landscape');
      }
    } catch (err) {
      console.log('Fullscreen לא זמין:', err);
    }
  };

  return (
    <header className="header">
      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/whiteLogo.svg`}
        className="App-logo"
        alt="logo"
      />

      <Hamburger />

      {/* כפתור מסך מלא */}
      <button
        className="fullscreen-btn"
        onClick={enterFullscreen}
        aria-label="מסך מלא"
      >
        ⛶
      </button>

      <button
        className="back-homeNav"
        onClick={() => navigate('/menu')}
      />
    </header>
  );
}

export default Header;