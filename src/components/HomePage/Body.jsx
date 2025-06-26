import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import FeaturedProperties from './FeaturedProperties';
import CallToAction from './CallToAction';
import Footer from './Footer';
import useHome from './useHome';
import images from '../assets/images';

const Body = () => {
  const {properties, loading, error} = useHome();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Hero />
      <AboutUs />
      <FeaturedProperties properties={properties} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;