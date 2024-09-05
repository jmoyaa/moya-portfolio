import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Awards from './components/Awards';
import ContactForm from './components/ContactForm';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loading from './components/loading'; // Import the Loading component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading time to 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading /> // Show loading spinner while the app is loading
      ) : (
        <>
          <Header />
          <About />
          <Projects />
          <Awards />
          <Contact />
          <ContactForm />
        </>
      )}
    </div>
  );
};

export default App;
