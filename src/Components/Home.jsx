import React from 'react';
import cultural from '../assets/cultural.jpg';  

const Home = () => {
  return (
    <section id="home">
      <h2>Welcome to the Udhayam Fest</h2>
      <img src={cultural}  alt="Cultural Program Poster" className="poster" />
      <div className="scroll-content">
        <p>Join us for a series of exciting events and activities that showcase the talents of our students.</p>
      </div>    
    </section>
  );
};

export default Home;
    