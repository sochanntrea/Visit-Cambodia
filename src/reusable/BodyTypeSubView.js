import React from 'react';
import HeaderDropdown from './HeaderDropdown';
import Footer from './Footer';


const BodyTypeSubView = ({ items = [], image = '', bannerText = '' , textTitle = ''}) => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <HeaderDropdown />
      <main className="flex-grow mt-3 " style={{ marginTop: '5rem' }}>
        <div className="relative">
          <img
            src={image}
            alt="Destination"
            className="w-full object-cover hover:shadow-2xl"
            style={{ height: '50vh' }}
          />
          <div
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xs sm:text-3xl lg:text-7xl"
            style={{
              background: 'linear-gradient(90deg, #4B5563, #4299E1, #000000)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {bannerText}
          </div>
        </div>

        <div className="mt-5 sm:mt-6 lg:mt-8">
          <div className="grid grid-row md:grid-row lg:grid-row gap-3 sm:gap-6 lg:gap-8 ml-8 mr-8 p-0 md:p-4 lg:p-8">
            <h2 className="text-lg sm:text-3xl lg:text-3xl font-semibold">{textTitle}</h2>
            {Array.isArray(items) && items.map((item, index) => (
              <div key={index} className="flex h-28 sm:h-52 md:h-64 lg:h-64 bg-gray-200 rounded-lg m-1 transform transition-transform hover:scale-105 z-0 hover:opacity-80 hover:z-10">
                <div className="w-2/5">
                  <a href={`${item.link}`}>
                    <div className="relative rounded-lg overflow-hidden shadow-md">
                      <img
                        src={item.imageSrc}
                        alt={`Destination ${index + 1}`}
                        className="w-full h-28 sm:h-52 md:h-64 lg:h-64 object-cover transform transition-transform"
                      />
                    </div>
                  </a>
                </div>
                <div className="w-2/3 p-3 sm:p-6 lg:p-8">
                  <a href={`${item.title}`}>
                    <h3 className="text-xs sm:text-lg md:text-xl lg:text-xl font-semibold text-left">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-500 text-xs sm:text-md md:text-lg lg:text-lg mb-4">
                      {window.innerWidth < 640 ? (
                        item.description.slice(0, 65) + "..."
                      ) : window.innerWidth < 1024 ? (
                        item.description.slice(0, 200) + "..."
                      ) : (
                        item.description.length > 300 ? item.description.slice(0, 400) + "..." : item.description
                      )}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Line divider */}
          <hr className="my-4 mx-auto w-48 md:w-80 lg:w-96 h-1 bg-gray-300 rounded border-0 md:my-10 dark:bg-gray-500" />
          {/* ----------------------------------------------------------------- END Famous destination Section --------------------------------------------------------- */}
        </div>
      </main>
      <Footer />
      {/* Copyright notice */}
      <div>
        <p className=" text-gray-400 text-center bg-gray-800">&copy; 2023 Visit Cambodia All rights reserved.</p>
      </div>
    </div>
  );
};

export default BodyTypeSubView;
