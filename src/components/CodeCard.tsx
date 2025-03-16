import React from 'react';
import { CodeListing } from '../types';
import { Code2, DollarSign } from 'lucide-react';

interface CodeCardProps {
  listing: CodeListing;
  onPurchase: (listing: CodeListing) => void;
  disabled?: boolean;
}

export const CodeCard: React.FC<CodeCardProps> = ({ listing, onPurchase, disabled }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{listing.title}</h3>
          <span className="flex items-center text-emerald-400">
            <DollarSign className="w-4 h-4 mr-1" />
            {listing.price} ETH
          </span>
        </div>
        <p className="text-gray-400 mb-4">{listing.description}</p>
        <div className="flex items-center mb-4">
          <Code2 className="w-4 h-4 text-blue-400 mr-2" />
          <span className="text-blue-400">{listing.language}</span>
        </div>
        <div className="bg-gray-900 rounded p-4 mb-4">
          <pre className="text-gray-300 text-sm overflow-x-auto">
            {listing.preview}
          </pre>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-sm">
            Seller: {listing.seller.slice(0, 6)}...{listing.seller.slice(-4)}
          </span>
          <button
            onClick={() => onPurchase(listing)}
            disabled={disabled}
            className={`px-4 py-2 bg-blue-600 text-white rounded-lg transition-colors duration-200 ${
              disabled 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-blue-700'
            }`}
          >
            {disabled ? 'Processing...' : 'Purchase'}
          </button>
        </div>
      </div>
    </div>
  );
};