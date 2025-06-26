import React from 'react';
import PropertyDetails from './PropertyDetails';
import ContactForm from './ContactForm';
import { usePropertyDetail } from './usePropertyDetail';
import images from '../assets/images';

const Body = () => {
  const { property, loading, error, handleContactSubmit } = usePropertyDetail();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <PropertyDetails property={property} />
      <ContactForm onSubmit={handleContactSubmit} propertyId={property?.id} />
    </div>
  );
};

export default Body;