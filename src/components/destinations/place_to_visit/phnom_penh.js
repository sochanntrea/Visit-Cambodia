import React, { useState, useEffect } from 'react';
import data from '../../../json/destinations/place_to_visit.json';
import itemdata from '../../../json/destinations/place_to_visit/phnom_penh.json';
import HeaderDropdown from '../../../reusable/HeaderDropdown';
import Footer from '../../../reusable/Footer';

const PhnomPenh = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const specificItem = data.placeToVisitItem.find(item => item.link === '/phnom_penh');
    setItem(specificItem);
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }

  // Mapping between category names and display names
  const categoryDisplayName = {
    destinations: 'Destinations',
    thingtodo: 'Thing to do',
    food: 'Food',
    souvenir: 'Souvenir',
    transportations: 'Transportations',
    placetostay: 'Place to stay',
  };

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <HeaderDropdown />
      <div className="mb-8 mt-36 p-8 bg-gray-200">
        {item && (
          <div className="flex flex-col md:flex-row">
            <img
              src={item.imageSrc}
              alt={item.title}
              style={{ width: '75%', maxHeight: '50vh', objectFit: 'cover' }}
              className="md:w-1/2 rounded-lg drop-shadow-2xl opacity-80"
            />
            <div className="md:w-1/2 p-4">
              <h2 className='text-xl font-semibold mb-4'>{item.title}</h2>
              <p className='text-md'>{item.description}</p>
            </div>
          </div>
        )}

        {/* Limit to display only the first 5 items for each category */}
        {Object.keys(itemdata.PhnomPenhItem[0]).map((category, index) => (
          <div key={index} className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 mt-12 p-1">
              {categoryDisplayName[category] || category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itemdata.PhnomPenhItem[0][category].slice(0, 6).map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white p-4 rounded-md shadow-md">
                  <img
                    src={item.imagesrc}
                    alt={item.descriptions}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                  />
                  <h2 className='text-lg font-bold mb-3'>{item.title}</h2>
                  <h3 className="text-md font-medium mb-2">{item.descriptions}</h3>
                  <h3 className='text-md font-semibold mb-1'>Budget: {item.budget}</h3>
                  <p className='text-md underline text-blue-600'>{item.locations}</p>
                  <p className="text-sm text-gray-500">{item.more_informations}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PhnomPenh;
