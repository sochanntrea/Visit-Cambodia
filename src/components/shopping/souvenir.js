import React from 'react';
import BodyTypeSubView from '../../reusable/BodyTypeSubView';
import data from  '../../json/shopping/souvenir.json'


const Souvenir = () => {
    const Image = 'Picture/Shopping/Souvenir/main.jpeg';
    const BannerText = 'Souvenir';
    const TextTitle = "Buy the Souvenir";
  return <BodyTypeSubView items={data.souvenirItem} image={Image} bannerText={BannerText} textTitle={TextTitle} />;
};

export default Souvenir;
