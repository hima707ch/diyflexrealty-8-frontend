import React from 'react';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 id="Footer_2" className="text-lg font-semibold mb-4">DIY Flex Realty</h3>
            <p id="Footer_3" className="text-gray-400">Your trusted partner in finding the perfect property.</p>
          </div>
          <div>
            <h3 id="Footer_4" className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Properties</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 id="Footer_5" className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Real Estate Ave</li>
              <li>contact@diyflex.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 id="Footer_6" className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p id="Footer_7">&copy; 2024 DIY Flex Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;