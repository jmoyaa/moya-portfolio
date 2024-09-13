import React, { useState, useEffect } from 'react';
import './Awards.css'; 

const projectData = [
  {
    id: 1,
    title: "Compostif-AI: An Automated Composting System With Random Forest (ML) for Compost Maturity Assessment",
    description: "Conducted a thesis and developed a prototype on compost maturity assessment using artificial intelligence (Random Forest), involving data collection, analysis, and presentation of findings. Developed a user-friendly interface using Electron JS, JavaScript, HTML, CSS, which was designed using Figma, allowing users to easily input data and visualize compost maturity levels through progress bar. The project not just demonstrated strong analytical and problem-solving skills related to composting, but as well as proficiency in both front-end, back-end development, and UI/UX design. The work earned the Best Research Paper award (CpE Batch 2024) and is currently in the process of copyright and patenting applications.",
    images: ['/compostifai-5.png','/compostifai-6.png' ],
    thumbnail: '/compostifai-6.png'
  },
  {
    id: 2,
    title: "Harvard University CS50 Program",
    description: "Completed and passed Harvard University’s CS50B: Computer Science for Business Professionals at Harvard University, gaining a strong foundation in the application of computer science principles to business scenarios. Equipped with the skills to bridge the gap between technology and business strategy, I bring a unique perspective to digital transformation and data-driven decision-making.",
    images: ['/award-1.png'],
    thumbnail: '/award-1.png',
  },
  {
    id: 3,
    title: "Meta Front-End Developer Professional Certificate",
    description: "Completed Meta's 5-month Front-End Developer Professional Certificate (Sep 2023 - Jan 2024), mastering GitHub version control, React components, props, forms, API interaction, and responsive UI design with HTML5, CSS, Bootstrap, and Tailwind CSS.",
    images: ['/award-2.png'],
    thumbnail: '/award-2.png',
  },

  {
    id: 4,
    title: "Cloud Computing",
    description: "Completed and earned badges and certificates for AWS Cloud Computing 101, AWS Cloud Quest: Cloud Practitioner, and Microsoft AZ-104 Exam Preparation.",
    images: ['/award-3.png'],
    thumbnail: '/award-3.png',
  },

];

const Awards = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const openPopup = (project) => {
    setActiveProject(project);
    setIsPopupOpen(true);
    setEnlargedImage(null); // Reset enlarged image when opening a new popup
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setActiveProject(null);
    setEnlargedImage(null);
  };

  const openEnlargedImage = (image) => {
    setEnlargedImage(image);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      const projectGrid = document.querySelector('.project-grid1');
      if (projectGrid && projectGrid.contains(event.target)) {
        event.preventDefault();
        const scrollAmount = 20;
        projectGrid.scrollLeft += event.deltaY * scrollAmount;
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <section id="awards" className="projects">
      <h2 className="project-title">ACHIEVEMENTS 
        
      </h2>
      
      <div className="project-grid1">
        {projectData.map((project) => (
          <div key={project.id}>
            <img
              className="project-item"
              src={project.thumbnail}
              alt={project.title}
              onClick={() => openPopup(project)}
            />
          </div>
        ))}
      </div>

      {isPopupOpen && activeProject && (
        <div className="popup open" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <div className="popup-images">
              {activeProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${activeProject.title} ${index + 1}`}
                  onClick={() => openEnlargedImage(image)}
                />
              ))}
            </div>
            {enlargedImage && (
              <div className="enlarged-image-view" onClick={closeEnlargedImage}>
                <img src={enlargedImage} alt="Enlarged view" />
                <div className="close-button" onClick={closeEnlargedImage}>&#10005;</div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Awards;
