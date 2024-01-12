import React from 'react';
import BodyTypeSubView from '../../reusable/BodyTypeSubView';
import data from  '../../json/moreinfo/news.json'


const Cultures = () => {
    const Image = 'Picture/More_info/News/main.jpeg';
    const BannerText = 'News and Stories';
    const TextTitle = "Explore more News and Stories";
  return <BodyTypeSubView items={data.NewsItem} image={Image} bannerText={BannerText} textTitle={TextTitle}/>;
};

export default Cultures;
