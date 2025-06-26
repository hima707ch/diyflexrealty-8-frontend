import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img id="AboutUs_2" src={images[1]} alt="Our Team" className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 id="AboutUs_3" className="text-3xl font-bold mb-6 text-gray-900">Who We Are</h2>
            <p id="AboutUs_4" className="text-gray-600 mb-6">DIY Flex Realty is your trusted partner in real estate, combining years of expertise with innovative solutions to help you find the perfect property. Our dedication to excellence and customer satisfaction sets us apart in the industry.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <h3 id="AboutUs_5" className="text-4xl font-bold text-blue-600 mb-2">1000+</h3>
                <p id="AboutUs_6" className="text-gray-500">Properties Sold</p>
              </div>
              <div className="text-center">
                <h3 id="AboutUs_7" className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
                <p id="AboutUs_8" className="text-gray-500">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;