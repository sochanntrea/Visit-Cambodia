import React from 'react';
import BodyTypeSubView from '../../reusable/BodyTypeSubView';
import data from  '../../json/shopping/transportations.json'


const Cultures = () => {
    const Image = 'Picture/Shopping/Transportations/main.jpeg';
    const BannerText = 'Transportations';
    const TextTitle = "Find the Transportations";
  return <BodyTypeSubView items={data.BookTheHotelsItem} image={Image} bannerText={BannerText} textTitle={TextTitle}/>;
};

export default Cultures;
