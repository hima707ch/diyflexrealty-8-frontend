import React from 'react';
import images from '../assets/images';

const PropertyDetails = ({ property }) => {
  if (!property) return null;

  return (
    <div id="PropertyDetails_1" className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div id="PropertyDetails_2" className="relative h-96">
        <img
          src={images[0] || property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
          id="PropertyDetails_3"
        />
      </div>
      <div id="PropertyDetails_4" className="p-6">
        <h1 id="PropertyDetails_5" className="text-3xl font-bold mb-4">{property.title}</h1>
        <div id="PropertyDetails_6" className="grid grid-cols-2 gap-4 mb-6">
          <div id="PropertyDetails_7" className="text-gray-700">
            <p id="PropertyDetails_8" className="font-semibold">Price:</p>
            <p id="PropertyDetails_9">${property.price?.toLocaleString()}</p>
          </div>
          <div id="PropertyDetails_10" className="text-gray-700">
            <p id="PropertyDetails_11" className="font-semibold">Location:</p>
            <p id="PropertyDetails_12">{property.location}</p>
          </div>
          <div id="PropertyDetails_13" className="text-gray-700">
            <p id="PropertyDetails_14" className="font-semibold">Property Type:</p>
            <p id="PropertyDetails_15">{property.type}</p>
          </div>
          <div id="PropertyDetails_16" className="text-gray-700">
            <p id="PropertyDetails_17" className="font-semibold">Size:</p>
            <p id="PropertyDetails_18">{property.size} sq ft</p>
          </div>
        </div>
        <div id="PropertyDetails_19" className="mb-6">
          <h2 id="PropertyDetails_20" className="text-xl font-semibold mb-2">Description</h2>
          <p id="PropertyDetails_21" className="text-gray-700">{property.description}</p>
        </div>
        <div id="PropertyDetails_22" className="mb-6">
          <h2 id="PropertyDetails_23" className="text-xl font-semibold mb-2">Features</h2>
          <ul id="PropertyDetails_24" className="list-disc list-inside text-gray-700">
            {property.features?.map((feature, index) => (
              <li key={index} id={`PropertyDetails_feature_${index}`}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;