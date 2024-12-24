import React from "react";
import { FaBell, FaEnvelope, FaSearch, FaWhatsapp } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  const whatsappLink = "https://wa.me/0798586575"; // Replace with your WhatsApp number

  return (
    <div className="bg-white  p-4 flex justify-between items-center">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-1/2">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100 outline-none w-full"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        {/* Message Icon */}
        <div className="relative">
       <a href="messages"><FaEnvelope className="text-gray-600 text-xl cursor-pointer" /></a>   
        
        </div>

        {/* WhatsApp Icon */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-500 text-2xl hover:text-green-600 cursor-pointer" />
        </a>

        {/* Bell Notification */}
        <MdAccountCircle className="text-gray-600 text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
