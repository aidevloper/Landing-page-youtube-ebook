// Payment Configuration
export const PAYMENT_CONFIG = {
  // Payment Gateway Settings
  gateway: 'cashfree',
  
  // Currency Settings
  currency: 'INR',
  currencySymbol: '₹',
  
  // Product Details
  product: {
    name: 'AI YouTube Automation Ebook',
    description: 'Complete system for building six-figure faceless YouTube channels',
    price: 799,
    originalPrice: 1499,
    discount: 47, // Percentage discount
    bonusValue: 70000
  },
  
  // Payment Methods
  methods: [
    {
      id: 'upi',
      name: 'UPI',
      icon: 'Smartphone',
      description: 'PhonePe, Google Pay, Paytm'
    },
    {
      id: 'cards',
      name: 'Cards',
      icon: 'CreditCard',
      description: 'Credit/Debit Cards'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: 'Building',
      description: 'All major banks'
    }
  ],
  
  // Success/Error URLs
  urls: {
    success: '/payment-success',
    failure: '/payment-failed',
    cancel: '/payment-cancelled'
  }
};

// Payment validation
export const validatePayment = (amount) => {
  return amount >= PAYMENT_CONFIG.product.price;
};

// Format currency
export const formatCurrency = (amount) => {
  return `${PAYMENT_CONFIG.currencySymbol}${amount.toLocaleString('en-IN')}`;
}; 