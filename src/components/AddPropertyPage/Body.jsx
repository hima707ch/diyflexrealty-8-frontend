import React from 'react';
import PropertyForm from './PropertyForm';
import images from '../assets/images';
import { useAddProperty } from './useAddProperty';

const Body = () => {
  const { handleSubmit, isLoading, error } = useAddProperty();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-3xl mx-auto" id="Body_2">
        <div className="text-center mb-8" id="Body_3">
          <h1 className="text-3xl font-bold text-gray-900" id="Body_4">Add New Property</h1>
          <p className="mt-2 text-gray-600" id="Body_5">Fill in the details below to list your property</p>
        </div>
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md" id="Body_6">
            {error}
          </div>
        )}
        <PropertyForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Body;