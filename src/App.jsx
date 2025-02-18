import React, { useState, useEffect } from 'react';
import LoadingPage from './Components/LoadingPage'; 
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import "animate.css/animate.min.css";
import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingPage />  // Show loading page for 3 seconds
      ) : (
        <>
          <Header />
          <main>
            <Home />
            <About />
            <Events />
            <Contact />
          </main>
          <Footer />
          <Analytics />
        </>
      )}
    </div>
  );
}

export default App;
