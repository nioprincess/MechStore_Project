import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const PinterestIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
    fill="currentColor"
  >
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.937-.2-2.38.042-3.4.217-.937 1.407-5.965 1.407-5.965s-.358-.72-.358-1.78c0-1.67.967-2.915 2.17-2.915 1.024 0 1.518.77 1.518 1.688 0 1.03-.653 2.567-.994 3.995-.285 1.194.6 2.17 1.777 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.873-2.064-4.882-5.014-4.882-3.414 0-5.418 2.562-5.418 5.207 0 1.03.397 2.138.897 2.738.098.118.112.22.083.338-.092.386-.302 1.23-.343 1.402-.054.223-.18.27-.414.162-1.543-.722-2.507-2.98-2.507-4.798 0-3.788 2.744-7.273 7.905-7.273 4.15 0 7.365 2.953 7.365 6.903 0 4.117-2.595 7.43-6.205 7.43-1.21 0-2.35-.63-2.738-1.373 0 0-.598 2.282-.744 2.84-.27 1.03-1 2.32-1.484 3.105A12 12 0 1 0 12 0z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Support Column */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Support</h2>
            <div className="space-y-2">
              <p>Habarugira Elic</p>
              <p>DH 454 Kigali Rwanda</p>
              <p>Esclusive@gmail.com</p>
              <p>*675*786*7876*987</p>
            </div>
          </div>

          {/* Account Column */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Account</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">My Acount</a></li>
              <li><a href="#" className="hover:text-white">Login / Register</a></li>
              <li><a href="#" className="hover:text-white">Cart</a></li>
              <li><a href="#" className="hover:text-white">Wishlist</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Customerservice</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Payment Method</a></li>
              <li><a href="#" className="hover:text-white">Money Back Guarante</a></li>
              <li><a href="#" className="hover:text-white">Refund & Replacement</a></li>
              <li><a href="#" className="hover:text-white">Product Returns</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Join Us And Stay Up To Date</h2>
            <p className="mb-4">Receive Our Latest Updates About Out Products & Promotion</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="flex-1 px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="px-4 py-2 bg-green-400 text-black rounded-md hover:bg-green-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white">
              <PinterestIcon />
            </a>
            <a href="#" className="hover:text-white">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          <p>© Copyright Rimel 2023. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;