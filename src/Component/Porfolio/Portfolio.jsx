import  { useState } from 'react';
import { Card, Modal } from "flowbite-react";

const projects = [ // Array of project data
    {
        "image": "https://i.ibb.co.com/kssjG7JF/FitVerse.png",
        "title": "FitVerse",
        "description": "FitVerse is a full-stack fitness tracker application built using the MERN stack. It empowers users to lead a healthier lifestyle by providing features to track fitness progress, set goals, and engage with a supportive community.",
        "details": "Full details about FitVerse, including technologies used, challenges faced, and solutions implemented. You can write a lot more here.",
        "liveDemo": "https://fitverse-39c26.web.app/",
        GitDemo:"https://github.com/AnantaBG/FitVerse",
        "features": [
          {
            "title": "Multiple User Roles",
            "details": "Admin, Trainer, and Member roles with distinct functionalities."
          },
          {
            "title": "Comprehensive Fitness Tracking",
            "details": "Log workouts, monitor vitals, and set goals."
          },
          {
            "title": "Goal Setting",
            "details": "Define and track fitness aspirations."
          },
          {
            "title": "Community Engagement",
            "details": "Forums and discussions to interact with other users."
          },
          {
            "title": "User Authentication",
            "details": "Registration and login (email/password, social authentication)."
          }
        ],
        "technologies": {
          "frontend": ["React.js", ", Tailwind CSS"],
          "backend": ["Node.js", ", Express.js", ", MongoDB"],
          "authentication": ["TanStack Query", ", Redux or Context API"]
        }
      },
  {
    image: "https://i.ibb.co.com/BXvcTMp/InnSight.png",
    title: "InnSight Hotel Booking Platform",
    description: "InnSight is a user-friendly hotel booking platform with interactive maps, robust authentication, and a seamless booking experience.",
    liveDemo: "https://inn-sight-95eaf.web.app/",
    GitDemo:"https://github.com/AnantaBG/InnSight",
    features: [
        {
            "title": "Interactive Map",
            "details": "Uses `react-leaflet` to show the hotel's location."
          },
          {
            "title": "User Authentication",
            "details": "Supports email/password and Google authentication."
          },
          {
            "title": "Room Details Page",
            "details": "Detailed room information and image slider, booking modal."
          },
          {
            "title": "My Bookings",
            "details": "Lists booked rooms, cancel booking, update date, review button."
          },
          {
            "title": "Responsive Design", // Added as a general important feature
            "details": "Works seamlessly on desktop, tablet, and mobile devices."
          }
    ],
    technologies: {
      frontend: ["React", ", React Router", ", Tailwind CSS"], // Added Tailwind
      authentication: ["Firebase Authentication"],
      backend: ["Firebase Firestore"]
      
    }
  },
  {
    image: "https://i.ibb.co.com/nTYKf2q/Zen.png", 
    title: "Zen Study",
    description: "Zen Study: An interactive web app for learning Japanese vocabulary with lessons, pronunciation practice, and progress tracking.",
    
    liveDemo: "https://zen-study-3343a.web.app/",
    GitDemo:"https://github.com/AnantaBG/Zen_Study",
    features: [
      {
        title: "User Authentication",
        details: ["Log in with Google or register a new account via Firebase Authentication."]
      },
      {
        title: "Interactive Lessons",
        details: ["Learn vocabulary through engaging lessons categorized by difficulty levels."]
      },
      {
        title: "Pronunciation Practice",
        details: ["Click on words to hear their correct pronunciation."]
      },
      {
        title: "Vocabulary Cards",
        details: ["Study words with definitions, examples, and usage tips."]
      },
      {
        title: "Progress Tracking",
        details: ["Track your learning progress and vocabulary growth."]
      },
      {
        title: "Smooth Animations",
        details: ["Optional animation effects enhance the user experience."]
      }
    ],
    technologies: {
      frontend: ["React", ", React Router", ", CSS"], // Removed "(or CSS-in-JS)" for consistency
      backend: ["Firebase Authentication", ", Firestore"], // Combined backend and database
      authentication: ["Firebase Hosting"],
    }
  },
  {
    image: "https://i.ibb.co.com/n8m7G3v3/Visa.png",
    title: "VISA COMPASS",
    description: "A user-friendly web portal simplifying the visa application process. Users can research requirements, apply online, and track applications. ",
    features: [
        {
          "title": "Comprehensive Visa Information",
          "details": [
            "Detailed visa information (country, type, processing time, requirements, etc.)"
          ]
        },
        {
          "title": "Secure User Management",
          "details": [
            "Firebase Authentication for login/registration",
          ]
        },
        {
          "title": "Visa Management",
          "details": [
            "Add/manage visas (for logged-in users)",
          ]
        },
        {
          "title": "Visa Application & Tracking",
          "details": [
            "Online visa application submission",
          ]
        },
        {
          "title": "User Experience",
          "details": [
            "Intuitive navigation",
            ", Search and filtering",
            ", Theme toggle (dark/light mode)",
            ", Animations and interactions"

          ]
        }
    ],
    technologies: {
        "frontend": ["React", ", Lottie React", ", React Awesome Reveal"],
        "backend": ["Node.js", ", Express.js", ", MongoDB"],
        "authentication": ["Firebase"]
    },
    liveDemo: "https://visa-compass.web.app/",
    GitDemo:"https://github.com/AnantaBG/VISA-COMPASS"
  },
];


const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="mt-20 lg:w-3/4 mx-auto md:w-10/12 w-11/12" id="portfolio">
      <div className="flex mb-10 flex-col justify-center mx-auto text-center">
        <h2 className="sm:text-4xl text-3xl mt-6 text-[#4db5ff]">My Portfolio</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        {projects.map((project) => (
          <Card key={project.title} className="bg-transparent border-transparent shadow-md shadow-blue-400">
            <div>
              <img src={project.image} alt={project.title} />
            </div>
            <div className="mt-2">
              <h1 className="text-3xl">{project.title}</h1>
              <h1 className="mt-3">{project.description}</h1>
              <div className="mt-10">
                <a className="btn mr-3" href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <button className="btn-primary btn" onClick={() => handleViewDetails(project)}>
                  View Details
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && ( // Only render the modal if a project is selected
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header className=''>{selectedProject.title}</Modal.Header>
          <Modal.Body className='bg-[#1f1f38]'>
            <div >
            <p className='text-3xl'>Technologies Used:<br /><span className='text-sm font-extrabold font-mono'>FrontEnd:</span> <span className='text-xs'> {selectedProject.technologies.frontend}</span>
            <br /><span className='text-sm font-extrabold font-mono'>BackEnd:</span> <span className='text-xs'> {selectedProject.technologies.backend}</span>
            <br /><span className='text-sm font-extrabold font-mono'>Auth:</span> <span className='text-xs'> {selectedProject.technologies.authentication}</span>
            </p>
            </div>
            <div className='mt-2'>
            <h1 className='text-2xl'>Details:</h1>
            <p>1. {selectedProject.features[0].title}</p>
            <p className='ml-5'>{selectedProject.features[0].details}</p>
            </div>
            <div>
            <p>2. {selectedProject.features[1].title}</p>
            <p className='ml-5'>{selectedProject.features[1].details}</p>
            </div>
            <div>
            <p>3. {selectedProject.features[2].title}</p>
            <p className='ml-5'>{selectedProject.features[2].details}</p>
            </div>
            <div>
            <p>4. {selectedProject.features[3].title}</p>
            <p className='ml-5'>{selectedProject.features[3].details}</p>
            </div>
            <div>
            <p>5. {selectedProject.features[4].title}</p>
            <p className='ml-5'>{selectedProject.features[4].details}</p>
            </div>
          </Modal.Body>
          <Modal.Footer className=''>
          <a target='_blank' href={selectedProject.liveDemo} className="btn-primary btn">
              Live Demo
            </a>
            <a target='_blank' href={selectedProject.GitDemo} className="btn-primary btn">
              Open Github
            </a>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Portfolio;