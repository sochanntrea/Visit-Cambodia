import React, { useState, useEffect } from 'react';

function HeaderDropdown() {
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [isDestinationsDropdownOpen, setIsDestinationsDropdownOpen] = useState(false);
  const [isShoppingDropdownOpen, setIsShoppingDropdownOpen] = useState(false);
  const [isAboutusDropdownOpen, setIsAboutusDropdownOpen] = useState(false);
  const [isMoreinfoDropdownOpen, setIsMoreinfoDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // English as Default
  const [dropdownLeaveTimer, setDropdownLeaveTimer] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveMenuItem(path);
  }, []);

  const handleMouseEnter = (dropdownToggle) => {
    clearTimeout(dropdownLeaveTimer);
    switch (dropdownToggle) {
      case 'destinations':
        setIsDestinationsDropdownOpen(true);
        setIsShoppingDropdownOpen(false);
        setIsAboutusDropdownOpen(false);
        setIsMoreinfoDropdownOpen(false);
        break;
      case 'shopping':
        setIsShoppingDropdownOpen(true);
        setIsDestinationsDropdownOpen(false);
        setIsAboutusDropdownOpen(false);
        setIsMoreinfoDropdownOpen(false);
        break;
      case 'aboutus':
        setIsAboutusDropdownOpen(true);
        setIsDestinationsDropdownOpen(false);
        setIsShoppingDropdownOpen(false);
        setIsMoreinfoDropdownOpen(false);
        break;
      case 'moreinfo':
        setIsMoreinfoDropdownOpen(true);
        setIsDestinationsDropdownOpen(false);
        setIsShoppingDropdownOpen(false);
        setIsAboutusDropdownOpen(false);
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsDestinationsDropdownOpen(false);
      setIsShoppingDropdownOpen(false);
      setIsAboutusDropdownOpen(false);
      setIsMoreinfoDropdownOpen(false);
    }, 200); // delay dropdown menu 2 second 
    setDropdownLeaveTimer(timer);
  };

  const handleDropdownClick = () => {
    clearTimeout(dropdownLeaveTimer);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="bg-gray-800 text-gray-200 p-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img
            src="../image/logo.png"
            alt="Page Logo"
            className="w-8 h-8 sm:w-8 sm:h-8 lg:w-16 lg:h-16 ml-0 lg:ml-5 rounded-md lg:rounded-xl"
          />
          <p className="ml-2 text-xs sm:text-xs md:text-lg lg:text-2xl font-semibold text-gray-200">
            Visit Cambodia
          </p>
        </a>
      </div>

      <div className="md:flex lg:flex items-center mr-10 gap-8">
        <div
          onMouseEnter={() => handleMouseEnter('destinations')}
          onMouseLeave={handleMouseLeave}
          className={`hover:underline hover:text-blue-200 menu-item cursor-pointer mr-6 ${
            isDestinationsDropdownOpen ? 'active' : ''
          }`}
        >
          Destinations
          {isDestinationsDropdownOpen && (
            <div
              onMouseEnter={() => handleMouseEnter('destinations')}
              onMouseLeave={handleMouseLeave}
              onClick={handleDropdownClick}
              className="absolute bg-gray-200 text-gray-800 bg-opacity-60 mt-2 p-4 rounded-sm w-56 text-sm"
            >
              <a
                href="/place-to-visit"
                className={`hover:underline ${
                  activeMenuItem === '/place-to-visit' ? 'active' : ''
                }`}
              >
                Place to Visit
              </a> <br />
              <hr className='mb-4'/>
              <a
                href="/things-to-do"
                className={`hover:underline ${
                  activeMenuItem === '/thing-to-do' ? 'active' : ''
                }`}
              >
                Things to Do
              </a> <br />
              <hr className='mb-4'/>
              <a
                href="/local-food-and-drink"
                className={`hover:underline ${
                  activeMenuItem === '/local-food-and-drink' ? 'active' : ''
                }`}
              >
                Local Food and Drink
              </a> <br />
              <hr className='mb-4'/>
              <a
                href="/place-to-visit"
                className={`hover:underline ${
                  activeMenuItem === '/what-to-prepare' ? 'active' : ''
                }`}
              >
                What to Prepare
              </a> 
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => handleMouseEnter('shopping')}
          onMouseLeave={handleMouseLeave}
          className={`hover:underline hover:text-blue-200 menu-item cursor-pointer mr-6 ${
            isShoppingDropdownOpen ? 'active' : ''
          }`}
        >
          Shopping
          {isShoppingDropdownOpen && (
            <div
              onMouseEnter={() => handleMouseEnter('shopping')}
              onMouseLeave={handleMouseLeave}
              onClick={handleDropdownClick}
              className="absolute bg-gray-200 text-gray-800 bg-opacity-60 mt-2 p-4 rounded-sm w-56 text-sm"
            >
               <a
                href="/souvenir"
                className={`hover:underline ${
                  activeMenuItem === '/souvenir' ? 'active' : ''
                }`}
              >
                Souvenir
              </a> <br />
              <hr className='mb-4'/>
              <a
                href="/book-the-hotel"
                className={`hover:underline ${
                  activeMenuItem === '/book-the-hotel' ? 'active' : ''
                }`}
              >
               Book the Hotels
              </a> <br />
              <hr className='mb-4'/>
              <a
                href="/tranpostations"
                className={`hover:underline ${
                  activeMenuItem === '/tranpostations' ? 'active' : ''
                }`}
              >
                Transportations
              </a>
            </div>
            
          )}
        </div>

        <div
          onMouseEnter={() => handleMouseEnter('aboutus')}
          onMouseLeave={handleMouseLeave}
          className={`hover:underline hover:text-blue-200 menu-item cursor-pointer mr-6 ${
            isAboutusDropdownOpen ? 'active' : ''
          }`}
        >
          About Us
          {isAboutusDropdownOpen && (
            <div
              onMouseEnter={() => handleMouseEnter('aboutus')}
              onMouseLeave={handleMouseLeave}
              onClick={handleDropdownClick}
              className="absolute bg-gray-200 text-gray-800 bg-opacity-60 mt-2 p-4 rounded-sm w-56 text-sm"
            >
              <a
                href="/contact-us"
                className={`hover:underline ${
                  activeMenuItem === '/place-to-visit' ? 'active' : ''
                }`}
              >
                Contact Us
              </a> <br />
              <hr className='mb-4'/>
              <a
                href="/private-policy"
                className={`hover:underline ${
                  activeMenuItem === '/thing-to-do' ? 'active' : ''
                }`}
              >
                Private Policy
              </a> <br />
              <hr className='mb-4'/>
              <a
                href="/term-and-conditions"
                className={`hover:underline ${
                  activeMenuItem === '/local-food-and-drink' ? 'active' : ''
                }`}
              >
               Term and Conditions
              </a>
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => handleMouseEnter('moreinfo')}
          onMouseLeave={handleMouseLeave}
          className={`hover:underline hover:text-blue-200 menu-item cursor-pointer mr-6 ${
            isMoreinfoDropdownOpen ? 'active' : ''
          }`}
        >
          More Information
          {isMoreinfoDropdownOpen && (
            <div
              onMouseEnter={() => handleMouseEnter('moreinfo')}
              onMouseLeave={handleMouseLeave}
              onClick={handleDropdownClick}
              className="absolute bg-gray-200 text-gray-800 bg-opacity-60 mt-2 p-4 rounded-sm w-56 text-sm"
            >
              <a
                href="/news"
                className={`hover:underline ${
                  activeMenuItem === '/place-to-visit' ? 'active' : ''
                }`}
              >
                News
              </a> <br />
              <hr className='mb-4'/>
              <a
                href="/cultures"
                className={`hover:underline ${
                  activeMenuItem === '/thing-to-do' ? 'active' : ''
                }`}
              >
                Cultures
              </a> <br />
              <hr className='mb-4'/>
              <a
                href="/festivals"
                className={`hover:underline ${
                  activeMenuItem === '/local-food-and-drink' ? 'active' : ''
                }`}
              >
                Festivals
              </a>
            </div>
          )}
        </div>
        <div className="relative">
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="cursor-pointer border-none appearance-none focus:outline-none bg-transparent text-white"
          >
            <option value="en">🇺🇸 English</option>
            <option value="kh">🇰🇭 Khmer</option>
          </select>
        </div>
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
            font-weight: bold;
            transform: scale(1.2);
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}

export default HeaderDropdown;
