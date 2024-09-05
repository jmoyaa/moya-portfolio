import React, { useEffect, useState } from 'react';
import './Projects.css'; 
const projectData = [
  {
    id: 1,
    title: "Compostif-AI: An Automated Composting System With Random Forest (ML) for Compost Maturity Assessment",
    description: "Conducted a thesis and developed a prototype on compost maturity assessment using artificial intelligence (Random Forest), involving data collection, analysis, and presentation of findings. Developed a user-friendly Desktop Application using Electron JS, JavaScript, HTML, CSS, which was designed using Figma, allowing users to easily input data and visualize compost maturity levels through progress bar. The project not just demonstrated strong analytical and problem-solving skills related to composting, but as well as proficiency in both front-end, back-end development, and UI/UX design. The work earned the Best Research Paper award (CpE Batch 2024) and is currently in the process of copyright and patenting applications.",
    images: ['/compostifai-1.png', '/compostifai-2.png', '/compostifai-3.png', '/compostifai-4.png'],
    thumbnail: '/slide-5.svg',
    
  },
  {
    id: 2,
    title: "SPILL DA TEA",
    description: "SPILL DA TEA is a food and beverage shop found in Taguig, Philippines, known for its milk tea, coffee, and takoyaki. The website developed for SPILL DA TEA includes a dynamic reservation system that allows customers to book their orders online. The site is user-friendly, with options to sign up, log in, view the menu, and place orders.",
    images: ['/SDT-1.png', '/SDT-2.png', '/SDT-3.png', '/SDT-4.png'],
    thumbnail: '/slide-8.png'
  },
  {
    id: 3,
    title: "K/DA- INSPIRED WEBSITE [FAN-PROJECT]",
    description: `This is a basic fan project website dedicated to K/DA, a virtual music group from the popular game League of Legends (LoL). K/DA has captured the hearts of many with their catchy songs and vibrant characters. The website serves as a hub for fans to stay updated on K/DA's latest songs and albums, allowing them to easily browse through recent releases. It also features a direct link to the official K/DA product shop, ensuring fans can access exclusive merchandise. Additionally, the website includes a member page where users can get to know the virtual stars of the group. To stay connected, a subscribe button directs fans to K/DA's official social media networks (SNS), keeping them informed of the latest news and updates. This project is a tribute to the creativity and energy of K/DA, offering fans a comprehensive resource to explore and enjoy all things K/DA. Disclaimer: K/DA and League of Legends are trademarks owned by Riot Games, Inc. This is a fan-made concept and is not officially affiliated with Riot Games.`,
    images: ['/kda-1.png', '/kda-2.png', '/kda-3.png', '/kda-4.png'],
    thumbnail: '/slide-7.svg'
  },
  {
    id: 4,
    title: "Meta Front End Project (ATLA-inspired website)",
    description: "This project is a fan-inspired website created as part of the requirements to pass the Meta Front End Developer Professional Certificate. The website is themed around the Netflix Live Action adaptation of Avatar: The Last Airbender and offers fans a simple yet informative platform. It features the official characters from the show, the most recent trailer, and some key information about the series. Disclaimer: This is a fan-inspired website and is not officially affiliated with Netflix or the Avatar: The Last Airbender franchise.",
    images: ['/slide-6.svg', '/ATLA-2.png'],
    thumbnail: '/slide-6.svg'
  },
];

const Projects = () => {
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
      const projectGrid = document.querySelector('.project-grid');
      if (projectGrid && projectGrid.contains(event.target)) {
        event.preventDefault();
        const scrollAmount = 100;
        projectGrid.scrollLeft += event.deltaY * scrollAmount;
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="project-title">PROJECTS BY 
        <span className="name">JAY MOYA</span>
      </h2>
      
      <div className="project-grid">
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

export default Projects;