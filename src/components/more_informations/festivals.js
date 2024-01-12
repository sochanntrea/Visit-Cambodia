import React from 'react';
import BodyTypeSubView from '../../reusable/BodyTypeSubView';
import data from  '../../json/moreinfo/festivals.json'


const Cultures = () => {
    const Image = 'Picture/More_info/Festivals/main.webp';
    const BannerText = 'Festivals';
    const TextTitle = "Explore more Festivals";
  return <BodyTypeSubView items={data.FestivalsItem} image={Image} bannerText={BannerText} textTitle={TextTitle}/>;
};

export default Cultures;
