// import './App.css';
import Homepage from './components/Homepage';

import PlaceToVisit from './components/destinations/place_to_visit';
import ThingsTodo from './components/destinations/things_to_do';
import LocalFoodAndDrink from './components/destinations/local_food_and_drink';

import Souvenir from './components/shopping/souvenir';
import BookTheHotels from './components/shopping/book_the_hotels';
import Transportations from './components/shopping/transportations';

import ContactUs from './components/about_us/contact_us';
import PrivatePolicy from './components/about_us/private_policy';
import TermAndConditions from './components/about_us/term_and_conditions';

import News from './components/more_informations/news';
import Cultures from './components/more_informations/cultures';
import Festivals from './components/more_informations/festivals';

import PhnomPenh from './components/destinations/place_to_visit/phnom_penh';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
         <Route path='/place-to-visit' element={<PlaceToVisit />} />
         <Route path='/things-to-do' element={<ThingsTodo />} />
         <Route path='/local-food-and-drink' element={<LocalFoodAndDrink />} />
         
         <Route path='/souvenir' element={<Souvenir />} />
         <Route path='/book-the-hotel' element={<BookTheHotels />} />
         <Route path='/tranpostations' element={<Transportations />} />

         <Route path='/contact-us' element={<ContactUs />} />
         <Route path='/private-policy' element={<PrivatePolicy />} />
         <Route path='/term-and-conditions' element={<TermAndConditions />} />

         <Route path='/news' element={<News />} />
         <Route path='/cultures' element={<Cultures />} />
         <Route path='/festivals' element={<Festivals />} />
         

         <Route path='/phnom_penh' element={<PhnomPenh />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
