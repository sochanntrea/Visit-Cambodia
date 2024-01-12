import React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi'; // Import icons as per your choice

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    setActiveMenuItem(path);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-800 text-gray-200 p-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img src="image/logo.png" alt="Page Logo" className="w-8 h-8 sm:w-8 sm:h-8 lg:w-16 lg:h-16 ml-0 lg:ml-5 rounded-md lg:rounded-xl" />
          <p className='ml-2 text-xs sm:text-xs md:text-lg lg:text-2xl font-semibold text-gray-200'>Visit Cambodia</p>
        </a>
      </div>
      <div className="text-sm sm:text-sm md:text-md lg:text-lg mr-0 lg:mr-8">
        {menuOpen && (
          // Mobile menu
          <div
            ref={menuRef}
            className="sm:hidden fixed top-0 right-0 bg-white h-screen opacity-75 text-black p-6 z-20"
          >
            <nav className="flex flex-col space-y-4">
              <a href="/Destination" className={`menu-item ${activeMenuItem === '/Destination' ? 'active' : ''}`}>Destination</a>
              <a href="/Activity" className={`menu-item ${activeMenuItem === '/Activity' ? 'active' : ''}`}>Activity</a>
              <a href="/StoriesNEWS" className={`menu-item ${activeMenuItem === '/StoriesNEWS' ? 'active' : ''}`}>Stories & News</a>
              <a href="/AboutUs" className={`menu-item ${activeMenuItem === '/AboutUs' ? 'active' : ''}`}>About Us</a>
            </nav>
          </div>
        )}
      </div>
      {/* Laptop menu */}
      <div className="hidden md:block lg:block">
        <nav className="flex text-sm sm:text-sm md:text-md lg:text-lg mr-0 lg:mr-4 md:mr-2">
          <a href="/Destination" className={`hover:underline hover:text-blue-200 menu-item mr-8 ${activeMenuItem === '/Destination' ? 'active' : ''}`}>Destinations</a>
          <a href="/Activity" className={`hover:underline hover:text-blue-200 menu-item mr-8 ${activeMenuItem === '/Activity' ? 'active' : ''}`}>Activity</a>
          <a href="/StoriesNEWS" className={`hover:underline hover:text-blue-200 menu-item mr-8 ${activeMenuItem === '/StoriesNEWS' ? 'active' : ''}`}>Stories & News</a>
          <a href="/AboutUs" className={`hover:underline hover:text-blue-200 menu-item mr-4 ${activeMenuItem === '/AboutUs' ? 'active' : ''}`}>About Us</a>
        </nav>
      </div>
      <div className="sm:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <FiMenu size={24} /> {/* Replace with your menu icon */}
        </button>
      </div>
      <style>
        {`
          .menu-item {
            transition: transform 0.2s;
          }

          .menu-item:hover {
            transform: scale(1.1);
          }

          .menu-item.active {
            font-weight: bold; /* Adjust styling for the active menu item */
            transform: scale(1.2);
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}

export default Header;
