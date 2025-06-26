import React from 'react';
import images from '../assets/images';

const FeaturedProperties = ({ properties, loading, error }) => {
  if (loading) return <div id="FeaturedProperties_1" className="text-center py-20">Loading...</div>;
  if (error) return <div id="FeaturedProperties_2" className="text-center py-20 text-red-500">{error}</div>;

  return (
    <section id="FeaturedProperties_3" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="FeaturedProperties_4" className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties?.map((property, index) => (
            <div key={property.id} id={`FeaturedProperties_${index + 5}`} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={property.image || images[index]} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">${property.price.toLocaleString()}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;