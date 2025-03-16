import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface ListingFormProps {
  onSubmit: (listing: {
    title: string;
    description: string;
    price: string;
    language: string;
    preview: string;
  }) => void;
}

export const ListingForm: React.FC<ListingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    language: '',
    preview: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      price: '',
      language: '',
      preview: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">List Your Code</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Price (ETH)</label>
          <input
            type="number"
            step="0.001"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Programming Language</label>
          <input
            type="text"
            value={formData.language}
            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Code Preview</label>
          <textarea
            value={formData.preview}
            onChange={(e) => setFormData({ ...formData, preview: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            rows={6}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          List Code
        </button>
      </div>
    </form>
  );
};