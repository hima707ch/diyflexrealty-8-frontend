import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M45,-60.5C58.2,-48.3,68.3,-32.6,73.2,-14.8C78.2,3,77.9,23,69.4,38.7C60.9,54.4,44.1,65.8,25.9,71.3C7.7,76.8,-12,76.5,-29.8,70.1C-47.6,63.7,-63.5,51.2,-72.3,34.7C-81.1,18.2,-82.9,-2.3,-77.4,-20.4C-71.9,-38.5,-59.1,-54.2,-43.7,-65.8C-28.3,-77.4,-10.3,-84.9,4.3,-90.1C18.8,-95.3,31.8,-72.7,45,-60.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Find Your Dream
                <span className="animate-bounce inline-block"> Home</span>
              </span>
            </h1>
            <p id="Hero_3" className="text-blue-100 text-lg mb-8">Discover the perfect property that matches your lifestyle with DIY Flex Realty's extensive portfolio.</p>
            <button id="Hero_4" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">Get Started</button>
          </div>
          <div className="md:w-1/2">
            <img id="Hero_5" src={images[0]} alt="Modern Home" className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;