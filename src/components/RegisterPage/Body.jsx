import React from 'react';
import RegistrationForm from './RegistrationForm';
import images from '../assets/images';

const Body = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" id="Body_1">
      <div className="sm:mx-auto sm:w-full sm:max-w-md" id="Body_2">
        <img src={images[0]} alt="Logo" className="mx-auto h-12 w-auto" id="Body_3" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" id="Body_4">
          Create your account
        </h2>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default Body;