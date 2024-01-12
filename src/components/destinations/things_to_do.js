import React from 'react';
import BodyTypeSubView from '../../reusable/BodyTypeSubView';
import data from  '../../json/destinations/things_to_do.json'


const ThingsTodo = () => {
    const Image = 'Picture/Destinations/Things_To_Do/main.jpeg';
    const BannerText = 'Things You Can Do';
    const TextTitle = 'Explore more activity';
  return <BodyTypeSubView items={data.thingsToDoItem} image={Image} bannerText={BannerText} textTitle={TextTitle} />;
};

export default ThingsTodo;
