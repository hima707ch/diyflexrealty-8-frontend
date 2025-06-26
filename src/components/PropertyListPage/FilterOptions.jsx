import React from 'react';
import images from '../assets/images';

const FilterOptions = ({ filters, onFilter }) => {
  const propertyTypes = ['House', 'Apartment', 'Condo', 'Villa'];

  return (
    <div id="FilterOptions_1" className="bg-gray-50 p-4 rounded-lg">
      <div id="FilterOptions_2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div id="FilterOptions_3" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Min Price</label>
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => onFilter('minPrice', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div id="FilterOptions_4" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Max Price</label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => onFilter('maxPrice', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div id="FilterOptions_5" className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Property Type</label>
          <select
            value={filters.type}
            onChange={(e) => onFilter('type', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">All Types</option>
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;