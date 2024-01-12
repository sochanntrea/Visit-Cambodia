import React from 'react';
import BodyTypeSubView from '../../reusable/BodyTypeSubView';
import data from  '../../json/destinations/local_food_drink.json'


const LocalFoodAndDrink = () => {
    const Image = 'Picture/Destinations/Local_Food_Drink/main.jpeg';
    const BannerText = 'Popular Food in Cambodia';
    const TextTitle = "Local food and drinks";
  return <BodyTypeSubView items={data.localFoodAndDrinkItem} image={Image} bannerText={BannerText} textTitle={TextTitle} />;
};

export default LocalFoodAndDrink;
