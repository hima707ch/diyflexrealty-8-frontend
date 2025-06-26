import React from 'react';
import images from '../assets/images';

const PropertyEditForm = ({ property, onSubmit, onChange }) => {
  return (
    <form id="PropertyEditForm_1" onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div id="PropertyEditForm_2" className="mb-4">
        <label id="PropertyEditForm_3" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          id="PropertyEditForm_4"
          type="text"
          name="title"
          value={property?.title || ''}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div id="PropertyEditForm_5" className="mb-4">
        <label id="PropertyEditForm_6" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          id="PropertyEditForm_7"
          type="number"
          name="price"
          value={property?.price || ''}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div id="PropertyEditForm_8" className="mb-4">
        <label id="PropertyEditForm_9" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
          Location
        </label>
        <input
          id="PropertyEditForm_10"
          type="text"
          name="location"
          value={property?.location || ''}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div id="PropertyEditForm_11" className="mb-4">
        <label id="PropertyEditForm_12" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="PropertyEditForm_13"
          name="description"
          value={property?.description || ''}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        />
      </div>

      <div id="PropertyEditForm_14" className="mb-4">
        <label id="PropertyEditForm_15" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
          Property Type
        </label>
        <select
          id="PropertyEditForm_16"
          name="type"
          value={property?.type || ''}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
        </select>
      </div>

      <div id="PropertyEditForm_17" className="flex items-center justify-between">
        <button
          id="PropertyEditForm_18"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default PropertyEditForm;