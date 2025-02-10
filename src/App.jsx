import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import "animate.css/animate.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
