import React from 'react';
import BodyTypeSubView from '../../reusable/BodyTypeSubView';
import data from  '../../json/destinations/place_to_visit.json'


const PlaceToVisit = () => {
    const Image = 'Picture/Destinations/Place_To_Visit/main.jpeg';
    const BannerText = 'Pick your Destinations';
    const TextTitle = "Place to Explore";
  return <BodyTypeSubView items={data.placeToVisitItem} image={Image} bannerText={BannerText} textTitle={TextTitle}/>;
};

export default PlaceToVisit;
