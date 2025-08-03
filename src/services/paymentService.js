// Payment Service - Simulates backend API calls
// In production, replace these with actual API calls to your backend

import { RAZORPAY_CONFIG, PRODUCT_CONFIG } from '../config/payment';

// Simulate order creation (replace with actual API call)
export const createRazorpayOrder = async (orderData) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, this would be a POST request to your backend:
    // const response = await axios.post('/api/payment/create-order', orderData);
    
    // Simulated response
    const order = {
      id: `order_${Date.now()}`,
      amount: orderData.amount,
      currency: orderData.currency,
      receipt: orderData.receipt,
      status: 'created',
      created_at: Date.now(),
      notes: orderData.notes
    };
    
    console.log('Order created:', order);
    return order;
    
  } catch (error) {
    console.error('Error creating order:', error);
    throw new Error('Failed to create payment order');
  }
};

// Simulate payment verification (replace with actual API call)
export const verifyPayment = async (paymentData) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In production, this would verify the payment signature:
    // const response = await axios.post('/api/payment/verify', paymentData);
    
    // Simulated verification
    const verification = {
      status: 'success',
      verified: true,
      payment_id: paymentData.razorpay_payment_id,
      order_id: paymentData.razorpay_order_id,
      signature: paymentData.razorpay_signature,
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
    
    // In production, this would send an actual email:
    // const response = await axios.post('/api/email/send-confirmation', {
    //   email: userEmail,
    //   order: orderDetails
    // });
    
    console.log(`Confirmation email sent to: ${userEmail}`);
    return { success: true, message: 'Email sent successfully' };
    
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send confirmation email');
  }
};

// Get Razorpay configuration
export const getRazorpayConfig = () => {
  return RAZORPAY_CONFIG;
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

// Generate receipt ID
export const generateReceiptId = (prefix = 'receipt') => {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
