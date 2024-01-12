import React from 'react';
import BodyTypeSubView from '../../reusable/BodyTypeSubView';
import data from  '../../json/shopping/book_the_hotels.json'


const Cultures = () => {
    const Image = 'Picture/Shopping/Book_the_Hotels/main.webp';
    const BannerText = 'Book the Hotels';
    const TextTitle = "Find the best Place to Stay";
  return <BodyTypeSubView items={data.BookTheHotelsItem} image={Image} bannerText={BannerText} textTitle={TextTitle}/>;
};

export default Cultures;
