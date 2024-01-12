// src/components/Homepage.js
import React from 'react';
import HeaderSample from '../reusable/HeaderDropdown';
import Footer from '../reusable/Footer';
import data_placetovisit from '../json/destinations/place_to_visit.json';
import data_thingtodo from '../json/destinations/things_to_do.json';
import data_localfoodanddrink from '../json/destinations/local_food_drink.json'

function Homepage() {
  
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <HeaderSample />
      <main className="flex-grow mt-3 " style={{ marginTop: '5rem' }}>
        <div className="relative">
          <img 
            id='welcome' 
            src="image/welcome.jpeg" 
            alt="Welcome photos" 
            className="w-full object-cover hover:shadow-2xl"
            style={{ height: '50vh' }}
          />
          <button className="absolute left-1/2 transform -translate-x-1/2 bg-blue-800 text-gray-100 hover:bg-gray-200 hover:text-black py-3 px-5 rounded-md bottom-3 transition-transform hover:scale-110 ">
            Explore More
          </button>
        </div>
        

        {/* ----------------------------------------------------------------- Famous destination Section ----------------------------------------------------------------- */}
        <div className="text-center text-2xl font-bold mt-16 mb-2 hover:text-gray-600">
          Places to Visit in Cambodia
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2 ml-6 mr-6">
          {data_placetovisit.placeToVisitItem.slice(0, window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 4 : 3).map((item, index) => (
            <div key={index} className="relative mt-6 mb-2 bg-gray-200 rounded-lg m-1 transform transition-transform hover:scale-110 z-0 hover:z-10">
              <a href={item.link}>
                <div className="w-full h-36 md:h-44 lg:h-48 relative rounded-lg overflow-hidden shadow-md">
                  <img
                    src={item.imageSrc}
                    alt={`News ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform hover:opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    <h3 className="text-lg font-bold text-center">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-2 text-gray-500 mb-5 m-4 text-left">
                  {item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description}
                </p>
              </a>
            </div>
          ))}
        </div>
        {/* Line divider */}
        <hr className="my-4 mx-auto w-48 md:w-80 lg:w-96 h-1 bg-gray-300 rounded border-0 md:my-10 dark:bg-gray-500" />
        {/* ----------------------------------------------------------------- END Famous destination Section --------------------------------------------------------- */}

        {/* ----------------------------------------------------------------- Things to do Section ----------------------------------------------------------------- */}
        <div className="text-center text-2xl font-bold mt-16 mb-2 hover:text-gray-600">
          Things To Do
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2 ml-6 mr-6">
          {data_thingtodo.thingsToDoItem.slice(0, window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 4 : 3).map((item, index) => (
            <div key={index} className="relative mt-6 mb-2 bg-gray-200 rounded-lg m-1 transform transition-transform hover:scale-110 z-0 hover:z-10">
              <a href={item.link}>
                <div className="w-full h-36 md:h-44 lg:h-48 relative rounded-lg overflow-hidden shadow-md">
                  <img
                    src={item.imageSrc}
                    alt={`News ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform hover:opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    <h3 className="text-lg font-bold text-center">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-2 text-gray-500 mb-5 m-4 text-left">
                  {item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description}
                </p>
              </a>
            </div>
          ))}
        </div>
        {/* Line divider */}
        <hr className="my-4 mx-auto w-48 md:w-80 lg:w-96 h-1 bg-gray-300 rounded border-0 md:my-10 dark:bg-gray-500" />
        {/* ----------------------------------------------------------------- END Things to do Section --------------------------------------------------------- */}
        
         {/* ----------------------------------------------------------------- Things to eat Section ----------------------------------------------------------------- */}
         <div className="text-center text-2xl font-bold mt-16 mb-2 hover:text-gray-600">
          Popular food in Cambodia
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2 ml-6 mr-6">
          {data_localfoodanddrink.localFoodAndDrinkItem.slice(0, window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 4 : 3).map((item, index) => (
            <div key={index} className="relative mt-6 mb-2 bg-gray-200 rounded-lg m-1 transform transition-transform hover:scale-110 z-0 hover:z-10">
              <a href={item.link}>
                <div className="w-full h-36 md:h-44 lg:h-48 relative rounded-lg overflow-hidden shadow-md">
                  <img
                    src={item.imageSrc}
                    alt={`News ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform hover:opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    <h3 className="text-lg font-bold text-center">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-2 text-gray-500 mb-5 m-4 text-left">
                  {item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description}
                </p>
              </a>
            </div>
          ))}
        </div>
        {/* Line divider */}
        <hr className="my-4 mx-auto w-48 md:w-80 lg:w-96 h-1 bg-gray-300 rounded border-0 md:my-10 dark:bg-gray-500" />
        {/* ----------------------------------------------------------------- END Things to eat Section --------------------------------------------------------- */}
 

      </main>
      <Footer />
      {/* Copyright notice */}
      <div>
        <p className=" text-gray-400 text-center bg-gray-800">&copy; 2023 Visit Cambodia All rights reserved.</p>
      </div>
    </div>
  );
}

export default Homepage;
