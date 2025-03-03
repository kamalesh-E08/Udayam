import React from 'react';
import cultural from '../assets/cultural.jpg';
import gifimage from '../../public/gifimage.gif';

const Home = () => {
  return (
<<<<<<< HEAD
    // <section id="home">
    <section id="home" style={{ backgroundImage: `url(${gifimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="home-container">
        <h2 className="home-heading">Welcome to the  Cultural Fest Of KIT.!!</h2>
        <img src={cultural} alt="Cultural Program Poster" className="home-poster" />
        
      </div>
=======
    <section id="home">
      <h2>Welcome to the Udhayam Fest</h2>
      <img src={cultural}  alt="Cultural Program Poster" className="poster" />
      <div className="scroll-content">
        <p>Join us for a series of exciting events and activities that showcase the talents of our students.</p>
      </div>    
>>>>>>> 9c5bff0 (font changes)
    </section>
  );
};

export default Home;
