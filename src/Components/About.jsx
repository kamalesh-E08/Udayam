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
    <section id="about">
      <h2 className="about-heading">About Udhayam</h2>
      <p className="about-text">
        Our cultural program aims to bring together students from diverse
        backgrounds to celebrate creativity and talent.
      </p>

      {/* Countdown Timer */}
      <div className="countdown-container">
        <div className="countdown-box">
          {days}
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-box">
          {hours}
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-box">
          {minutes}
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-box">
          {seconds}
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    </section>
  );
};

export default About;
