import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import bixnxt from '../assets/bixnxt.png';
import eventimage from '../assets/event.jpg';
import codeHunters from '../assets/code_hunters.png';
import paperPresentation from '../assets/paper_presentaion.png';
import gamez from '../assets/Gamez.png';
import gameposter from '../assets/gameposter.png';
import ppposter from '../assets/ppposter.png';
import codeposter from '../assets/codeposter.png';
import biznxtposter from '../assets/biznxtposter.png';

const events = [
  {
    title: "Paper Presentation",
    description: "Showcase your research and presentation skills.",
    fullDescription: "Paper Presentation is an event where you can showcase your research, technical knowledge, and presentation skills in front of an expert panel. Participants will be judged on innovation, content, and delivery.",
    image: paperPresentation,
    poster: ppposter,
    coordinators: ["Rubana", "Jane Smith"]
  },
  {
    title: "Code Hunter",
    description: "Solve coding challenges and hunt for bugs.",
    fullDescription: "Code Hunter is a thrilling coding event where participants solve programming puzzles, debug code, and compete in algorithmic challenges. A must for coding enthusiasts!",
    image: codeHunters,
    poster: codeposter,
    coordinators: ["Kamesh", "Rajadurai"]
  },
  {
    title: "BizNXT",
    description: "Present your innovative business ideas.",
    fullDescription: "BizNXT challenges participants to present innovative business ideas. Teams will pitch their startups to judges, focusing on feasibility, creativity, and market impact.",
    image: bixnxt,
    poster: biznxtposter,
    coordinators: ["Aswathi", "Devanya"]
  },
  {
    title: "Gamez",
    description: "Participate in fun and engaging games.",
    fullDescription: "GameZ is a fun-packed competition featuring eFootball and Stumble Guys. Compete against others in a fast-paced gaming experience!",
    image: gamez,
    poster: gameposter,
    coordinators: ["Kamalesh", "Mohammedsyfudee"]
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }, [selectedEvent]);

  return (
    <div className={selectedEvent ? "blur-website" : ""}>
      <section 
        id="events" 
        className="events-section" 
        style={{ backgroundImage: `url(${eventimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h2 className="events-heading">Events</h2>

        <div className="cards">
          {events.map((event, index) => (
            <Fade key={index} cascade damping={0.1}>
              <div className="card">
                  <img src={event.image} alt={event.title} className="event-image" />
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <button className="read-more-btn" onClick={() => setSelectedEvent(event)}>Read More</button>
              </div>
            </Fade>
          ))}
        </div>

        <div className="register-container">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfo58Yusrng6zob_qROEm6N0rgGgVMSQ7ZOCKWDjfAn1cWa_w/viewform" target="_blank" rel="noopener noreferrer" className="register-btn">
            Register Now
          </a>
        </div>
      </section>

      {selectedEvent && (
        <div className="event-modal" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>✖</button>
            <div className="modal-body">
              {/* Left Side - Image & Coordinators */}
              <div className="modal-left">
                  <img src={selectedEvent.poster} alt={selectedEvent.title} className="modal-image" />
                <h4>Coordinators:</h4>
                <ul className="coordinator-list">
                  {selectedEvent.coordinators.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </div>
              {/* Right Side - Description */}
              <div className="modal-right">
                <h3 className="modal-title">{selectedEvent.title}</h3>
                <p className="modal-description">{selectedEvent.fullDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
