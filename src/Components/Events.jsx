import React from 'react';
import { Fade } from 'react-awesome-reveal';
import bixnxt from '../assets/bixnxt.png';
import eventimage from '../assets/event.jpg';
import codeHunters from '../assets/code_hunters.png';
import paperPresentation from '../assets/paper_presentaion.png';
import gamez from '../assets/Gamez.png';

const events = [
  {
    title: "Paper Presentation",
    description: "Showcase your research and presentation skills.",
    image: paperPresentation
  },
  {
    title: "Code Hunter",
    description: "Solve coding challenges and hunt for bugs.",
    image: codeHunters
  },
  {
    title: "BizNXT",
    description: "Present your innovative business ideas.",
    image: bixnxt
  },
  {
    title: "Gamez",
    description: "Participate in fun and engaging games.",
    image: gamez
  }
];

const Events = () => {
  return (
    <section id="events" className="events-section"style={{ backgroundImage: `url(${eventimage})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* <img src={eventimage} alt="Events" className="events-image" /> */}
      {/* Events Heading */}
      <h2 className="events-heading">Events</h2>

      {/* Event Cards */}
      <div className="cards">
        {events.map((event, index) => (
          <Fade key={index} cascade damping={0.1}>
            <div className="card">
              <img src={event.image} alt={event.title} className="event-image" />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </Fade>
        ))}
      </div>

      {/* Register Button (Placed Below Event Cards) */}
      <div className="register-container">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfo58Yusrng6zob_qROEm6N0rgGgVMSQ7ZOCKWDjfAn1cWa_w/viewform" target="_blank" rel="noopener noreferrer" className="register-btn">
          Register Now
        </a>
      </div>
    </section>
  );
};

export default Events;
