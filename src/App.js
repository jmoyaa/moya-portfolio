import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loading from './components/loading';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading /> 
      ) : (
        <>
          <Header /> 
          <About /> 
          <Projects />
          <Awards />
          <Contact />
        
        </>
      )}
    </div>
  );
};

export default App;
