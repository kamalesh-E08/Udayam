import React, { useState, useEffect } from "react";

const About = () => {
  // Set the target date (March 1, 2025)
  const eventDate = new Date("2025-03-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // Function to format time
  const getTimeUnits = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeUnits(timeLeft);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">🎉 Welcome to Udhayam 2025! 🎊</h2>
        <p className="about-subtext">
          A grand intercollege cultural fest, bringing together talent, 
          creativity, and excitement!  
        </p>

        <div className="event-details">
          <p><strong>📅 Event Date:</strong> March 1, 2025</p>
          <p><strong>📍 Venue:</strong> KIT-CBE</p>
          <p><strong>🎟️ Registration Fee:</strong> ₹200 per person</p>
          <p><strong>🔹 Why Join?</strong></p>
          <ul className="about-list">
            <li>🔥 Showcase your skills in tech, arts, and business events</li>
            <li>🏆 Exciting prizes [5 Lakh ] and recognition</li>
            <li>🤝 Network with students from various colleges</li>
            <li>🎭 Fun, entertainment, and unforgettable memories!</li>
          </ul>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-section">
          <h3 className="countdown-heading">⏳ Countdown to Udhayam:</h3>
          <div className="countdown-container">
            <div className="countdown-box">
              <span className="countdown-number">{days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
