import React, { useState } from 'react';
import { useWallet } from './hooks/useWallet';
import { CodeCard } from './components/CodeCard';
import { ListingForm } from './components/ListingForm';
import { CodeListing } from './types';
import { Wallet, Code2 } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

// Sample data - in a real app, this would come from your backend
const initialListings: CodeListing[] = [
  {
    id: '1',
    title: 'React Authentication System',
    description: 'Complete authentication system with JWT tokens and refresh mechanism',
    price: '0.1',
    seller: '0x1234567890abcdef1234567890abcdef12345678',
    language: 'TypeScript',
    preview: 'export const useAuth = () => {\n  // Authentication logic\n};'
  },
  {
    id: '2',
    title: 'Smart Contract Template',
    description: 'ERC721 NFT contract with advanced features',
    price: '0.2',
    seller: '0xabcdef1234567890abcdef1234567890abcdef12',
    language: 'Solidity',
    preview: 'contract NFT is ERC721 {\n  // Contract implementation\n}'
  }
];

function App() {
  const { isConnected, address, connectWallet, disconnectWallet, formatAddress, sendTransaction } = useWallet();
  const [listings, setListings] = useState<CodeListing[]>(initialListings);
  const [isPurchasing, setIsPurchasing] = useState(false);

  const handlePurchase = async (listing: CodeListing) => {
    if (!isConnected) {
      await connectWallet();
      return;
    }

    if (listing.seller.toLowerCase() === address.toLowerCase()) {
      toast.error("You can't purchase your own listing!");
      return;
    }

    try {
      setIsPurchasing(true);
      const success = await sendTransaction(listing.seller, listing.price);
      
      if (success) {
        // In a real app, you would:
        // 1. Call your backend to mark the listing as sold
        // 2. Transfer the code to the buyer
        // 3. Update the UI accordingly
        setListings(listings.filter(l => l.id !== listing.id));
      }
    } catch (error) {
      console.error('Purchase error:', error);
    } finally {
      setIsPurchasing(false);
    }
  };

  const handleNewListing = (formData: Omit<CodeListing, 'id' | 'seller'>) => {
    const newListing: CodeListing = {
      ...formData,
      id: Date.now().toString(),
      seller: address,
    };
    setListings([newListing, ...listings]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster position="top-right" />
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold">CodeMarket</h1>
          </div>
          <button
            onClick={isConnected ? disconnectWallet : connectWallet}
            className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            disabled={isPurchasing}
          >
            <Wallet className="w-4 h-4 mr-2" />
            {isConnected ? formatAddress(address) : 'Connect Wallet'}
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {isConnected && (
          <div className="mb-8">
            <ListingForm onSubmit={handleNewListing} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <CodeCard
              key={listing.id}
              listing={listing}
              onPurchase={handlePurchase}
              disabled={isPurchasing}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;