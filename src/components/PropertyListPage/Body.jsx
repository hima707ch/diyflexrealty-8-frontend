import React from 'react';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import PropertyList from './PropertyList';
import usePropertyList from './usePropertyList';
import images from '../assets/images';

const Body = () => {
  const { properties, loading, error, filters, handleSearch, handleFilter, handlePageChange, currentPage } = usePropertyList();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold text-gray-800 mb-8">Find Your Perfect Property</h1>
      <div id="Body_3" className="space-y-6">
        <SearchBar onSearch={handleSearch} />
        <FilterOptions filters={filters} onFilter={handleFilter} />
        {error && <div id="Body_4" className="text-red-500 text-center py-4">{error}</div>}
        {loading ? (
          <div id="Body_5" className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <PropertyList 
            properties={properties}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Body;