import React, { useState, useEffect } from 'react';
import './Header.css';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsMenuOpen(false); 
    }
  };

  useEffect(() => {
    handleResize(); // Set the initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">
          <img className="logo-moya" src="moya-logo.png" alt="Moya Logo" />
        </div>
        {isMobile ? (
          <>
            <div className="nav-toggle" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} style={{ fontSize: '24px' }} />
            </div>
            <div className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                <li className="nav-item"><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
                <li className="nav-item"><a href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
                <li className="nav-item"><a href="#awards" onClick={toggleMenu}>AWARDS</a></li>
                <li className="nav-item"><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
               
              </ul>
              <div className="nav-icon">
                <a className="icon-item" href="https://www.linkedin.com/in/jaymoyaaa" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px' }} />
                </a>
                <a className="icon-item" href="https://www.facebook.com/broaljay/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px' }} />
                </a>
                <a className="icon-item" href="https://www.instagram.com/jmoyers_/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px' }} />
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <ul className="nav-list">
              <li className="nav-item"><a href="#about">ABOUT</a></li>
              <li className="nav-item"><a href="#projects">PROJECTS</a></li>
              <li className="nav-item"><a href="#awards">AWARDS</a></li>
              <li className="nav-item"><a href="#contact">CONTACT</a></li>
             
            </ul>
            <div className="nav-icon">
              <a className="icon-item" href="https://www.linkedin.com/in/jaymoyaaa" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px' }} />
              </a>
              <a className="icon-item" href="https://www.facebook.com/broaljay/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px' }} />
              </a>
              <a className="icon-item" href="https://www.instagram.com/jmoyers_/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px' }} />
              </a>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;


