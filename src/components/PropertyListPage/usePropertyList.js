import { useState, useEffect } from 'react';

const usePropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({
        ...filters,
        minPrice: filters.minPrice || undefined,
        maxPrice: filters.maxPrice || undefined,
        type: filters.type || undefined
      });

      const response = await fetch(`/api/properties/search?${queryParams}`);
      if (!response.ok) throw new Error('Failed to fetch properties');
      
      const data = await response.json();
      setProperties(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [filters]);

  const handleSearch = (location) => {
    setFilters(prev => ({ ...prev, location }));
    setCurrentPage(1);
  };

  const handleFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return {
    properties,
    loading,
    error,
    filters,
    currentPage,
    handleSearch,
    handleFilter,
    handlePageChange
  };
};

export default usePropertyList;