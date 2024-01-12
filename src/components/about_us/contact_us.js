import React from "react";
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter, FaTelegram, FaTiktok } from 'react-icons/fa6';


const ContactUs = () => {
    return (
        <div className="container mx-auto my-8 p-8 bg-gray-100 shadow-md rounded-md">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2 text-blue-800">Email</h2>
                    <p className="text-gray-700">visitcambodia@gmail.com</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2 text-blue-800">Location</h2>
                    <p className="text-gray-700">Phnom Penh, Cambodia</p>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-semibold mb-2 text-blue-800">Social Media</h2>
                <div className="flex items-center flex-row gap-4 justify-start mt-auto"> {/* Updated: Change justify-end to justify-start */}
                    {/* Facebook */}
                    <div className="text-black flex flex-col items-center">
                        <a href="/Facebook" className="hover:scale-125">
                        <FaSquareFacebook size={32} color="black" />
                        </a>
                    </div>
                    {/* Instagram */}
                    <div className="text-black flex flex-col items-center">
                        <a href="/Instagram" className="hover:scale-125">
                        <FaSquareInstagram size={32} color="black" />
                        </a>
                    </div>
                    {/* Twitter */}
                    <div className="text-black flex flex-col items-center">
                        <a href="/Twitter" className="hover:scale-125">
                        <FaSquareTwitter size={32} color="black" />
                        </a>
                    </div>
                    {/* Telegram */}
                    <div className="text-black flex flex-col items-center">
                        <a href="/Telegram" className="hover:scale-125">
                        <FaTelegram size={32} color="black" />
                        </a>
                    </div>
                    {/* TikTok */}
                    <div className="text-black flex flex-col items-center">
                        <a href="/TikTok" className="hover:scale-125">
                        <FaTiktok size={28} color="black" />
                        </a>
                    </div>
        </div>
            </div>
      </div>
    );
};

export default ContactUs;