import React from 'react';
import images from '../assets/images';

const CallToAction = () => {
  return (
    <section id="CallToAction_1" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="CallToAction_2" className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
        <p id="CallToAction_3" className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join thousands of satisfied homeowners who found their perfect property with DIY Flex Realty.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button id="CallToAction_4" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">Search Properties</button>
          <button id="CallToAction_5" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;