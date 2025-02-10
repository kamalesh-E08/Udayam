import React from 'react';
import clgLogo from '../assets/kit_logo.png';
import deptLogo from '../assets/dept_logo.jpg';

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <img src={clgLogo} alt="College Logo" className="logo1" />
          <div className='title-container'>
              <div>
                <h1 className='Heading'>UDHAYAM CULTURAL FEST</h1>
                  <ul className='nav-links'>
                    <li className='nav_child'><a href="#home">Home</a></li>
                    <li className='nav_child'><a href="#about">About</a></li>
                    <li className='nav_child'><a href="#events">Events</a></li>
                    <li className='nav_child'><a href="#contact">Contact</a></li>
                  </ul>
              </div>
          </div>
        <img src={deptLogo} alt="Department Logo" className="logo1" />
      </nav>
    </header>
  );
};

export default Header;
