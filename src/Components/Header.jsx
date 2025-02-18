import React, { useState, useEffect } from "react";
import clgLogo from "../assets/kit_logo.png";
import deptLogo from "../assets/dept_logo.jpg";
import Udayam from "../assets/Udayam.png";
import { BsJustify } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Hide navbar on scroll up, show on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${showNavbar ? "visible" : "hidden"}`}>
      <nav className="navbar">
        <div className="logo"><img src={clgLogo} alt="College Logo" className="logo1" /></div>
        <div className="mobile"><img src={Udayam} alt="Udhayam Logo" className="mobile-logo" /></div>
        <div className="mobile"><h1>UDHAYAM - 25</h1></div>
        <div className="title-container"><h1 className="Heading">UDHAYAM CULTURAL FEST</h1>
        <div className={`menu-overlay ${isOpen ? "open" : ""}`} onClick={closeMenu}></div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li className="nav_child"><a href="#home" onClick={closeMenu}>Home</a></li>
          <li className="nav_child"><a href="#about" onClick={closeMenu}>About</a></li>
          <li className="nav_child"><a href="#events" onClick={closeMenu}>Events</a></li>
          <li className="nav_child"><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="logo"><img src={deptLogo} alt="Department Logo" className="logo1" /></div>
      </nav>
    </header>
  );
};

export default Header;
