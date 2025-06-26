import React, { useState } from 'react';
import images from '../assets/images';

const ContactForm = ({ onSubmit, propertyId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, propertyId });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="ContactForm_1" className="bg-white rounded-lg shadow-lg p-6">
      <h2 id="ContactForm_2" className="text-2xl font-bold mb-4">Contact Agent</h2>
      <form id="ContactForm_3" onSubmit={handleSubmit} className="space-y-4">
        <div id="ContactForm_4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="ContactForm_5"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div id="ContactForm_6">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="ContactForm_7"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div id="ContactForm_8">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="ContactForm_9"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          id="ContactForm_10"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;