// Cashfree Payment Gateway Configuration
export const CASHFREE_CONFIG = {
  // Get App ID from environment variables (secure approach)
  // Fallback to hardcoded value if env var not working
  app_id: import.meta.env.VITE_CASHFREE_APP_ID || '618687142514b1e6f89fdcac88786816',

  // Environment (SANDBOX for testing, PRODUCTION for live)
  environment: import.meta.env.VITE_CASHFREE_MODE || 'PRODUCTION',
  
  // Business Details
  name: import.meta.env.VITE_BUSINESS_NAME || 'YouTube Automation Ebook',
  description: 'AI-Powered YouTube Automation System',
  
  // Theme
  theme: {
    color: '#10b981', // Emerald green to match your brand
    backgroundColor: '#ffffff'
  },
  
  // Currency
  currency: 'INR',
  
  // Cashfree base URLs
  get base_url() {
    return this.environment === 'PRODUCTION' 
      ? 'https://api.cashfree.com' 
      : 'https://sandbox.cashfree.com';
  },
  
  get checkout_url() {
    return this.environment === 'PRODUCTION'
      ? 'https://checkout.cashfree.com'
      : 'https://sandbox.cashfree.com';
  },
  
  // Test Mode check
  get test_mode() {
    return this.environment === 'SANDBOX';
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
  createOrder: '/api/cashfree/create-order',
  verifyPayment: '/api/cashfree/verify',
  webhook: '/api/cashfree/webhook'
};

// Payment Methods supported by Cashfree
export const PAYMENT_METHODS = [
  {
    id: 'cashfree',
    name: 'Cashfree (All Methods)',
    icon: 'CreditCard',
    description: 'Cards, UPI, Net Banking, Wallets'
  },
  {
    id: 'upi',
    name: 'UPI Payment',
    icon: 'Smartphone',
    description: 'PhonePe, Google Pay, Paytm, BHIM'
  },
  {
    id: 'netbanking',
    name: 'Net Banking',
    icon: 'Building',
    description: 'All major banks supported'
  },
  {
    id: 'cards',
    name: 'Credit/Debit Cards',
    icon: 'CreditCard',
    description: 'Visa, Mastercard, Rupay'
  }
];

// Validation function to check if Cashfree is properly configured
export const validateCashfreeConfig = () => {
  const appId = CASHFREE_CONFIG.app_id;
  
  if (!appId || appId === 'TEST_APP_ID') {
    console.warn('⚠️ Cashfree not configured with actual credentials. Using demo mode.');
    return false;
  }
  
  if (CASHFREE_CONFIG.environment === 'SANDBOX') {
    console.info('🧪 Cashfree configured in SANDBOX mode');
    return true;
  }
  
  if (CASHFREE_CONFIG.environment === 'PRODUCTION') {
    console.info('🔴 Cashfree configured in PRODUCTION mode');
    return true;
  }
  
  console.error('❌ Invalid Cashfree environment');
  return false;
};

// Get environment info
export const getEnvironmentInfo = () => {
  return {
    environment: CASHFREE_CONFIG.environment,
    keyConfigured: validateCashfreeConfig(),
    appId: CASHFREE_CONFIG.app_id?.substring(0, 12) + '...', // Partial key for debugging
    businessName: CASHFREE_CONFIG.name,
    baseUrl: CASHFREE_CONFIG.base_url
  };
};

// Generate order ID
export const generateOrderId = (prefix = 'order') => {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
