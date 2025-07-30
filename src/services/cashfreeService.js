// Cashfree Payment Service
import { CASHFREE_CONFIG, PRODUCT_CONFIG, generateOrderId } from '../config/cashfree';

// Load Cashfree SDK
const loadCashfreeSDK = () => {
  return new Promise((resolve, reject) => {
    if (window.Cashfree) {
      resolve(window.Cashfree);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
    script.onload = () => {
      if (window.Cashfree) {
        resolve(window.Cashfree);
      } else {
        reject(new Error('Cashfree SDK failed to load'));
      }
    };
    script.onerror = () => reject(new Error('Failed to load Cashfree SDK'));
    document.head.appendChild(script);
  });
};

// Initialize Cashfree
export const initializeCashfree = async () => {
  try {
    const Cashfree = await loadCashfreeSDK();
    
    // Initialize with environment
    await Cashfree.init({
      mode: CASHFREE_CONFIG.environment === 'PRODUCTION' ? 'production' : 'sandbox'
    });
    
    console.log('✅ Cashfree initialized successfully');
    return Cashfree;
  } catch (error) {
    console.error('❌ Failed to initialize Cashfree:', error);
    throw error;
  }
};

// Create payment session (simulate backend)
export const createPaymentSession = async (orderData) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, this would be a POST request to your backend:
    // const response = await axios.post('/api/cashfree/create-session', orderData);
    
    const orderId = generateOrderId();
    
    // Simulated payment session response
    const session = {
      order_id: orderId,
      payment_session_id: `session_${Date.now()}`,
      order_amount: orderData.amount,
      order_currency: 'INR',
      customer_details: orderData.customer_details,
      order_meta: {
        return_url: `${window.location.origin}/success`,
        notify_url: `${window.location.origin}/api/cashfree/webhook`
      },
      order_tags: {
        product: 'youtube-automation-ebook'
      }
    };
    
    console.log('Order created:', session);
    return session;
    
  } catch (error) {
    console.error('Error creating payment session:', error);
    throw new Error('Failed to create payment session');
  }
};

// Process payment with Cashfree
export const processCashfreePayment = async (formData) => {
  try {
    // Initialize Cashfree
    const Cashfree = await initializeCashfree();
    
    // Prepare order data
    const orderData = {
      amount: PRODUCT_CONFIG.price,
      currency: 'INR',
      customer_details: {
        customer_id: `customer_${Date.now()}`,
        customer_name: `${formData.firstName} ${formData.lastName}`,
        customer_email: formData.email,
        customer_phone: formData.phone
      }
    };
    
    // Create payment session
    const session = await createPaymentSession(orderData);
    
    // Payment options
    const checkoutOptions = {
      paymentSessionId: session.payment_session_id,
      redirectTarget: '_modal', // or '_self' for redirect
      appearance: {
        rebrandlyUrl: false,
        primaryColor: CASHFREE_CONFIG.theme.color,
        backgroundColor: CASHFREE_CONFIG.theme.backgroundColor
      }
    };
    
    // Open Cashfree checkout
    const result = await Cashfree.checkout(checkoutOptions);
    
    if (result.error) {
      throw new Error(result.error.message || 'Payment failed');
    }
    
    return {
      success: true,
      orderId: session.order_id,
      paymentId: result.paymentDetails?.paymentId,
      ...result.paymentDetails
    };
    
  } catch (error) {
    console.error('Payment processing error:', error);
    throw error;
  }
};

// Verify payment (simulate backend verification)
export const verifyPayment = async (paymentData) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In production, this would verify the payment on your backend:
    // const response = await axios.post('/api/cashfree/verify', paymentData);
    
    // Simulated verification
    const verification = {
      status: 'success',
      verified: true,
      order_id: paymentData.orderId,
      payment_id: paymentData.paymentId,
      timestamp: Date.now()
    };
    
    console.log('Payment verified:', verification);
    return verification;
    
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw new Error('Failed to verify payment');
  }
};

// Send confirmation email (simulate)
export const sendConfirmationEmail = async (userEmail, orderDetails) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    console.log(`Confirmation email sent to: ${userEmail}`);
    return { success: true, message: 'Email sent successfully' };
    
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send confirmation email');
  }
};

// Get Cashfree configuration
export const getCashfreeConfig = () => {
  return CASHFREE_CONFIG;
};

// Get product configuration
export const getProductConfig = () => {
  return PRODUCT_CONFIG;
};

// Format currency
export const formatCurrency = (amount, currency = 'INR') => {
  if (currency === 'INR') {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
  return `${currency} ${amount}`;
};
