import React from 'react';
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter, FaTelegram, FaTiktok } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 flex flex-col sm:flex-row justify-between items-center gap-7">
      <div className='mt-auto'>
        {/* Company Info */}
        <div className="text-white">
          <p className="text-xl sm:text-3xl lg:text-2xl font-semibold p-2  mb-8 sm:mb-24 lg:mb-12 mt-3 text-gray-200 hover:scale-105 hover:opacity-80">
            Travel and make memories <br /><i>money </i><strong>will return</strong>, <i>time </i> <strong>won't</strong>.</p>
        </div>

        {/* Social media icons */}
        <div className="flex items-center flex-row gap-4 justify-start mt-auto"> {/* Updated: Change justify-end to justify-start */}
          {/* Facebook */}
          <div className="text-white flex flex-col items-center">
            <a href="/Facebook" className="hover:scale-125">
              <FaSquareFacebook size={32} color="white" />
            </a>
          </div>
          {/* Instagram */}
          <div className="text-white flex flex-col items-center">
            <a href="/Instagram" className="hover:scale-125">
              <FaSquareInstagram size={32} color="white" />
            </a>
          </div>
          {/* Twitter */}
          <div className="text-white flex flex-col items-center">
            <a href="/Twitter" className="hover:scale-125">
              <FaSquareTwitter size={32} color="white" />
            </a>
          </div>
          {/* Telegram */}
          <div className="text-white flex flex-col items-center">
            <a href="/Telegram" className="hover:scale-125">
              <FaTelegram size={32} color="white" />
            </a>
          </div>
          {/* TikTok */}
          <div className="text-white flex flex-col items-center">
            <a href="/TikTok" className="hover:scale-125">
              <FaTiktok size={28} color="white" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-100 sm:mr-12 p-2 flex flex-col sm:flex-row gap-5 lg:gap-20 ml-28 sm:ml-0 lg:ml-0">
        <div className="text-left">
          <a href="/"><p className="flex hover:text-gray-300 hover:scale-110 text-2xl font-semibold mb-2">Destinations</p></a>
          <a href="/place-to-visit" className="flex hover:underline hover:text-blue-200 hover:scale-110">Place to visit</a>
          <a href="/things-to-do" className="flex hover:underline hover:text-blue-200 hover:scale-110">Thing to do</a> 
          <a href="/local-food-and-drink" className="flex hover:underline hover:text-blue-200 hover:scale-110">Food & Drink</a> 
          
        </div>

        <div className="text-left">
          <a href="/"><p className="flex hover:text-gray-300 hover:scale-110 text-2xl font-semibold mb-2">Shopping</p></a>
          <a href="/Souvenir" className="flex hover:underline hover:text-blue-200 hover:scale-110">Souvenir</a>     
          <a href="/Places" className="flex hover:underline hover:text-blue-200 hover:scale-110">Book the Hotel</a> 
          <a href="/Transportation" className="flex hover:underline hover:text-blue-200 hover:scale-110">Transportations</a>
        </div>

        <div className="text-left">
          <a href="/"><p className="flex hover:text-gray-300 hover:scale-110 text-2xl font-semibold mb-2">About Us</p></a>
          <a href="/ContactUs" className="flex hover:underline hover:text-blue-200 hover:scale-110">Contact Us</a> 
          <a href="/PrivatePolicy" className="flex hover:underline hover:text-blue-200 hover:scale-110">Private Policy</a> 
          <a href="/TermCondition" className="flex hover:underline hover:text-blue-200 hover:scale-110">Terms Conditions</a> 
        </div>
        <div className="text-left">
          <a href="/"><p className="flex hover:text-gray-300 hover:scale-110 text-2xl font-semibold mb-2">More Information</p></a>
          <a href="/Feedback" className='flex hover:underline hover:text-blue-200 hover:scale-110'>News</a> 
          <a href="/ContactUs" className="flex hover:underline hover:text-blue-200 hover:scale-110">Cultures</a> 
          <a href="/PrivatePolicy" className="flex hover:underline hover:text-blue-200 hover:scale-110">Festival</a> 
        </div>
      </div>
    </footer>
  );
}

export default Footer;