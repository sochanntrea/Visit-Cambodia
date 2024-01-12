import React from 'react';
import BodyTypeSubView from '../../reusable/BodyTypeSubView';
import data from  '../../json/moreinfo/cultures.json'


const Cultures = () => {
    const Image = 'Picture/More_info/Cultures/main.jpeg';
    const BannerText = 'Cultures';
    const TextTitle = "Explore more Culturals";
  return <BodyTypeSubView items={data.CulturesItem} image={Image} bannerText={BannerText} textTitle={TextTitle}/>;
};

export default Cultures;
