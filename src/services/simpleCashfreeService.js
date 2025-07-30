// Simplified Cashfree Payment Service
import { CASHFREE_CONFIG, PRODUCT_CONFIG, generateOrderId } from '../config/cashfree';

// Simple payment processing without complex SDK
export const processSimpleCashfreePayment = async (formData) => {
  try {
    console.log('🔄 Processing payment with simplified Cashfree integration');
    
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
    
    console.log('Order data:', orderData);
    
    // Create order
    const orderId = generateOrderId();
    
    // In a real implementation, this would:
    // 1. Send order data to your backend
    // 2. Backend creates order with Cashfree API
    // 3. Backend returns payment URL or session ID
    // 4. Frontend redirects user to Cashfree payment page
    
    // Simulate the payment flow
    const paymentUrl = generateCashfreePaymentURL(orderId, orderData);
    
    console.log('Payment URL:', paymentUrl);
    
    // For demo purposes, simulate payment success
    await simulatePaymentFlow(formData);
    
    return {
      success: true,
      orderId: orderId,
      paymentId: `pay_${Date.now()}`,
      method: 'simple_cashfree',
      amount: PRODUCT_CONFIG.price,
      paymentUrl: paymentUrl
    };
    
  } catch (error) {
    console.error('Simple payment error:', error);
    throw error;
  }
};

// Generate Cashfree payment URL (simulation)
const generateCashfreePaymentURL = (orderId, orderData) => {
  const baseUrl = CASHFREE_CONFIG.environment === 'PRODUCTION' 
    ? 'https://payments.cashfree.com/pay' 
    : 'https://payments-test.cashfree.com/pay';
    
  const params = new URLSearchParams({
    appId: CASHFREE_CONFIG.app_id,
    orderId: orderId,
    orderAmount: orderData.amount,
    orderCurrency: 'INR',
    customerName: orderData.customer_details.customer_name,
    customerEmail: orderData.customer_details.customer_email,
    customerPhone: orderData.customer_details.customer_phone,
    returnUrl: `${window.location.origin}/success`,
    notifyUrl: `${window.location.origin}/api/webhook`
  });
  
  return `${baseUrl}?${params.toString()}`;
};

// Simulate payment flow
const simulatePaymentFlow = async (formData) => {
  console.log('🎭 Simulating Cashfree payment flow for:', formData.email);
  
  // Show user that payment is being processed
  console.log('Opening payment gateway...');
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Processing payment...');
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log('Payment completed successfully');
  
  return true;
};

// Open payment in new window (alternative approach)
export const openCashfreePayment = async (formData) => {
  try {
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
    
    const orderId = generateOrderId();
    const paymentUrl = generateCashfreePaymentURL(orderId, orderData);
    
    // Open payment in new window
    const paymentWindow = window.open(
      paymentUrl, 
      'cashfree_payment',
      'width=600,height=700,scrollbars=yes,resizable=yes'
    );
    
    // Monitor payment window
    return new Promise((resolve, reject) => {
      const checkClosed = setInterval(() => {
        if (paymentWindow.closed) {
          clearInterval(checkClosed);
          // Simulate successful payment
          resolve({
            success: true,
            orderId: orderId,
            paymentId: `pay_${Date.now()}`,
            method: 'popup_cashfree',
            amount: PRODUCT_CONFIG.price
          });
        }
      }, 1000);
      
      // Timeout after 5 minutes
      setTimeout(() => {
        clearInterval(checkClosed);
        if (!paymentWindow.closed) {
          paymentWindow.close();
        }
        reject(new Error('Payment timeout'));
      }, 300000);
    });
    
  } catch (error) {
    console.error('Popup payment error:', error);
    throw error;
  }
};

// Verify payment (simulation)
export const verifySimplePayment = async (paymentData) => {
  try {
    console.log('🔍 Verifying payment:', paymentData.paymentId);
    
    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In real implementation, this would verify with Cashfree API
    const verification = {
      status: 'success',
      verified: true,
      order_id: paymentData.orderId,
      payment_id: paymentData.paymentId,
      amount: paymentData.amount,
      timestamp: Date.now()
    };
    
    console.log('✅ Payment verified:', verification);
    return verification;
    
  } catch (error) {
    console.error('Verification error:', error);
    throw error;
  }
};

// Check if Cashfree credentials are configured
export const isCashfreeConfigured = () => {
  const appId = CASHFREE_CONFIG.app_id;
  return appId && appId !== 'TEST_APP_ID';
};

// Get payment method options
export const getPaymentOptions = () => {
  return {
    simple: 'Simple Integration (Recommended)',
    popup: 'Popup Window',
    redirect: 'Direct Redirect',
    demo: 'Demo Mode'
  };
};
