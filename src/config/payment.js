// Payment Gateway Configuration with Environment Variables
export const RAZORPAY_CONFIG = {
  // Get Key ID from environment variables (secure approach)
  key_id: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_9999999999',
  
  // Business Details
  name: import.meta.env.VITE_BUSINESS_NAME || 'YouTube Automation Ebook',
  description: 'AI-Powered YouTube Automation System',
  image: '/favicon.ico',
  
  // Theme
  theme: {
    color: '#10b981' // Emerald green to match your brand
  },
  
  // Currency
  currency: 'INR',
  
  // Mode (test/live)
  mode: import.meta.env.VITE_RAZORPAY_MODE || 'test',
  
  // Test Mode check
  get test_mode() {
    return this.mode === 'test';
  }
};

export const PRODUCT_CONFIG = {
  name: 'AI YouTube Automation Ebook',
  description: 'Complete system for building six-figure faceless YouTube channels',
  price: parseInt(import.meta.env.VITE_PRODUCT_PRICE) || 999, // Price in INR
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

// Validation function to check if Razorpay is properly configured
export const validateRazorpayConfig = () => {
  const keyId = RAZORPAY_CONFIG.key_id;
  
  if (!keyId || keyId === 'rzp_test_9999999999' || keyId === 'rzp_test_YOUR_KEY_ID_HERE') {
    console.warn('⚠️ Razorpay not configured with actual credentials. Using demo mode.');
    return false;
  }
  
  if (keyId.startsWith('rzp_test_')) {
    console.info('🧪 Razorpay configured in TEST mode');
    return true;
  }
  
  if (keyId.startsWith('rzp_live_')) {
    console.info('🔴 Razorpay configured in LIVE mode');
    return true;
  }
  
  console.error('❌ Invalid Razorpay key format');
  return false;
};

// Get environment info
export const getEnvironmentInfo = () => {
  return {
    mode: RAZORPAY_CONFIG.mode,
    keyConfigured: validateRazorpayConfig(),
    keyId: RAZORPAY_CONFIG.key_id?.substring(0, 12) + '...', // Partial key for debugging
    businessName: RAZORPAY_CONFIG.name
  };
};
