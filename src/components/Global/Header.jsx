import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10 w-auto"/>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-2">PropertyHub</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8" id="Header_3">
            <Link to="/" className={`hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>Home</Link>
            <Link to="/propertylistpage" className={`hover:text-blue-600 transition-colors ${location.pathname === '/propertylistpage' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>Properties</Link>
            <Link to="/addpropertypage" className={`hover:text-blue-600 transition-colors ${location.pathname === '/addpropertypage' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>Add Property</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4" id="Header_4">
            <Link to="/loginpage" className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors">Login</Link>
            <Link to="/registerpage" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">Register</Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700" id="Header_5">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4" id="Header_6">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>Home</Link>
              <Link to="/propertylistpage" className={`hover:text-blue-600 transition-colors ${location.pathname === '/propertylistpage' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>Properties</Link>
              <Link to="/addpropertypage" className={`hover:text-blue-600 transition-colors ${location.pathname === '/addpropertypage' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>Add Property</Link>
              <hr className="my-2"/>
              <Link to="/loginpage" className="text-blue-600 hover:text-blue-700 transition-colors">Login</Link>
              <Link to="/registerpage" className="bg-blue-600 text-white rounded-lg py-2 px-4 text-center hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">Register</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;