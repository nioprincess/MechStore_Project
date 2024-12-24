import React from "react";
import { BsCart, BsTruck, BsClipboardData } from "react-icons/bs";
import { FaShippingFast, FaRegCreditCard, FaCog, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";


const Sidebar = () => {
  return (
    <div className="bg-gray-100 h-vh flex flex-col items-center lg:w-1/5 w-20">
      {/* Logo Section */}
      <div className="p-4 mb-10">
        {/* Replace 'logo.png' with your image path */}
        <img
          src="/mechstore_logo.jpeg"
          alt="Logo" width={150} height={150}
          className="object-cover lg:w-32"
        />
      </div>

      {/* Sidebar Menu */}
      <ul className="flex flex-col items-center gap-6 w-full">
        {/* Dashboard */}
        <li className="group flex items-center justify-center lg:justify-start w-full">
          <Link
            to="dashboard"
            className="flex items-center gap-4 text-gray-800 p-3 w-full hover:bg-gray-800 hover:text-white rounded no-underline"
          >
            <BsClipboardData size={24} />
            <span className="hidden lg:inline">Dashboard</span>
          </Link>
        </li>

        {/* Products */}
        <li className="group flex items-center justify-center lg:justify-start w-full">
          <Link
            to="product"
            className="flex items-center gap-4 text-gray-800 p-3 w-full hover:bg-gray-800 hover:text-white rounded no-underline"
          >
            <FaShippingFast size={24} />
            <span className="hidden lg:inline">Products</span>
          </Link>
        </li>
        <li className="group flex items-center justify-center lg:justify-start w-full">
          <Link
            to="messages"
            className="flex items-center gap-4 text-gray-800 p-3 w-full hover:bg-gray-800 hover:text-white rounded no-underline"
          >
            <FaEnvelope size={24} />
            <span className="hidden lg:inline">Messages</span>
          </Link>
        </li>
        {/* Settings */}
        <li className="group flex items-center justify-center lg:justify-start w-full">
          <Link
            to="profile"
            className="flex items-center gap-4 text-gray-800 p-3 w-full hover:bg-gray-800 hover:text-white rounded no-underline"
          >
            <FaCog size={24} />
            <span className="hidden lg:inline">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
