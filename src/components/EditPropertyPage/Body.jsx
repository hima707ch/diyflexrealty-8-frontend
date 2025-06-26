import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyEditForm from './PropertyEditForm';
import useEditProperty from './useEditProperty';
import images from '../assets/images';

const Body = () => {
  const {
    property,
    loading,
    error,
    handleSubmit,
    handleInputChange
  } = useEditProperty();

  if (loading) {
    return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div id="Body_2" className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
  }

  return (
    <div id="Body_3" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_4" className="max-w-3xl mx-auto">
        <h1 id="Body_5" className="text-3xl font-bold text-center mb-8">Edit Property</h1>
        <PropertyEditForm 
          property={property}
          onSubmit={handleSubmit}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Body;