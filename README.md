# CodeMarket - Decentralized Code Marketplace

CodeMarket is a decentralized marketplace built on the Ethereum blockchain (Sepolia testnet) where developers can buy and sell code snippets, components, and solutions.

## 🌐 Live Demo

Visit [CodeMarket](https://codemarket-flame.vercel.app/) to try the application.

## 🌟 Features

- **Wallet Integration**: Seamless MetaMask wallet connection
- **Code Listings**: Create and browse code listings with previews
- **Secure Transactions**: Direct ETH payments on Sepolia testnet
- **Real-time Updates**: Instant transaction notifications
- **Code Preview**: Syntax-highlighted code previews
- **Responsive Design**: Mobile-friendly interface

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MetaMask wallet extension
- Some Sepolia ETH for transactions

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/codemarket.git

# Navigate to project directory
cd codemarket

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

1. Install MetaMask browser extension
2. Connect to Sepolia testnet
3. Get some test ETH from a Sepolia faucet

## 💻 Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: TailwindCSS
- **Blockchain**: Ethers.js
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Build Tool**: Vite

## 🔧 Smart Contract Integration

The application interacts with the Ethereum blockchain through:

- Wallet connection management
- Network switching/validation
- Transaction handling
- Gas estimation
- Balance checks

## 🎨 UI Components

- `CodeCard`: Displays individual code listings
- `ListingForm`: Form for creating new listings
- `useWallet`: Custom hook for wallet management

## 📝 Usage

1. **Connect Wallet**
   - Click "Connect Wallet" button
   - Approve MetaMask connection
   - Ensure you're on Sepolia network

2. **List Code**
   - Fill out the listing form
   - Set title, description, price
   - Add code preview
   - Submit listing

3. **Purchase Code**
   - Browse available listings
   - Click "Purchase" on desired listing
   - Confirm transaction in MetaMask
   - Wait for confirmation

## 🛠️ Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Preview production build
npm run preview
```

## 🔒 Security

- Network validation before transactions
- Balance checks before purchases
- Gas estimation for accurate pricing
- Secure wallet connection handling

## 🔍 Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── CodeCard.tsx
│   │   └── ListingForm.tsx
│   ├── hooks/
│   │   └── useWallet.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── types.ts
├── public/
└── config files
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License



