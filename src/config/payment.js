// Payment Gateway Configuration
export const RAZORPAY_CONFIG = {
  // Test Key - Replace with your actual Razorpay key in production
  key_id: 'rzp_test_9999999999',
  
  // Business Details
  name: 'YouTube Automation Ebook',
  description: 'AI-Powered YouTube Automation System',
  image: '/favicon.ico',
  
  // Theme
  theme: {
    color: '#10b981' // Emerald green to match your brand
  },
  
  // Currency
  currency: 'INR',
  
  // Test Mode (set to false in production)
  test_mode: true
};

export const PRODUCT_CONFIG = {
  name: 'AI YouTube Automation Ebook',
  description: 'Complete system for building six-figure faceless YouTube channels',
  price: 999, // Price in INR
  originalPrice: 1499,
  currency: '₹',
  bonusValue: 70000,
  
  // Product features
  features: [
    'AI Tools Access (Lifetime)',
    'Private Mastermind Community',
    '1-on-1 Success Coaching Call',
    'Done-For-You Templates',
    'Monetization Blueprints'
  ]
};

// API Endpoints (replace with your actual backend URLs)
export const API_ENDPOINTS = {
  createOrder: '/api/payment/create-order',
  verifyPayment: '/api/payment/verify',
  webhook: '/api/payment/webhook'
};

// Payment Methods
export const PAYMENT_METHODS = [
  {
    id: 'razorpay',
    name: 'Razorpay (All Methods)',
    icon: 'CreditCard',
    description: 'Cards, UPI, Net Banking, Wallets'
  },
  {
    id: 'upi',
    name: 'UPI Payment',
    icon: 'Smartphone',
    description: 'PhonePe, Google Pay, Paytm'
  },
  {
    id: 'netbanking',
    name: 'Net Banking',
    icon: 'Building',
    description: 'All major banks supported'
  }
];
