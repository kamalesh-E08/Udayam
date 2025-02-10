import React from 'react';
import { Fade } from 'react-awesome-reveal';
import bixnxt from '../assets/bixnxt.png';
import codeHunters from '../assets/code_hunters.png'
import paperPresentation from '../assets/paper_presentaion.png'
import gamez from '../assets/Gamez.png'

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
    <section id="events">
      <h2>Events</h2>
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
    </section>
  );
};

export default Events;
