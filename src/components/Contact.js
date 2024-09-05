// Contact.js
import React from 'react';
import './Contact.css'; // Import the corresponding CSS
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import faEnvelope from free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>CONTACT ME</h2>  {/* Added heading */}
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
        <a className="icon-item" href="https://mail.google.com/mail/?view=cm&fs=1&to=iamjaymoya@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px' }} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
