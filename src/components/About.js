import React, { useState, useEffect } from 'react';
import './About.css'; // Import the corresponding CSS

const slides = [
  '/slide-1.svg',
  '/slide-2.svg',
  '/slide-3.svg',
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000); // Change slide every 4 sec

    return () => clearInterval(interval); // Clear interval on component unmount or when currentSlide changes
  }, [currentSlide]); // Dependency array includes currentSlide

  return (
    <section id="about" className="about">
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
          ))}
        </div>
        <div className="nav-control nav-prev" onClick={handlePrev}>&#9664;</div>
        <div className="nav-control nav-next" onClick={handleNext}>&#9654;</div>
        <div className="carousel-bullets">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`bullet ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
