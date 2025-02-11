import React from 'react';
import cultural from '../assets/cultural.jpg';
import gifimage from '../../public/gifimage.gif';

const Home = () => {
  return (
    // <section id="home">
    <section id="home" style={{ backgroundImage: `url(${gifimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="home-container">
        <h2 className="home-heading">Welcome to the  Cultural Fest Of KIT.!!</h2>
        <img src={cultural} alt="Cultural Program Poster" className="home-poster" />
        
      </div>
    </section>
  );
};

export default Home;
