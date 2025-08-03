// Demo Cashfree Payment Service - For Testing Without Real Credentials
import { PRODUCT_CONFIG, generateOrderId } from '../config/cashfree';

// Demo payment processing - simulates Cashfree flow for testing
export const processDemoCashfreePayment = async (formData) => {
  try {
    console.log('🧪 Processing DEMO Cashfree payment for:', formData.email);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate demo order
    const orderId = generateOrderId('demo');
    const paymentId = `demo_${Date.now()}`;

    console.log('📋 Demo order created:', orderId);

    // Simulate payment processing
    const paymentResult = await simulatePaymentProcessing(formData, orderId);

    return {
      success: true,
      orderId: orderId,
      paymentId: paymentId,
      method: 'demo_cashfree',
      status: 'success',
      demo: true,
      message: 'Demo payment completed successfully'
    };

  } catch (error) {
    console.error('❌ Demo payment error:', error);
    throw error;
  }
};

// Simulate payment processing with user interaction
const simulatePaymentProcessing = async (formData, orderId) => {
  return new Promise((resolve, reject) => {
    // Show demo payment modal
    const demoModal = createDemoPaymentModal(formData, orderId, resolve, reject);
    document.body.appendChild(demoModal);
  });
};

// Create demo payment modal
const createDemoPaymentModal = (formData, orderId, resolve, reject) => {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
      <div class="text-center mb-6">
        <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Demo Payment Gateway</h3>
        <p class="text-gray-600 text-sm">This is a simulation of the Cashfree payment process</p>
      </div>

      <div class="bg-gray-50 rounded-xl p-4 mb-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-600">Order ID:</span>
          <span class="font-mono text-sm text-gray-800">${orderId}</span>
        </div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-600">Amount:</span>
          <span class="font-bold text-gray-900">₹${PRODUCT_CONFIG.price.toLocaleString('en-IN')}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Customer:</span>
          <span class="text-gray-800">${formData.firstName} ${formData.lastName}</span>
        </div>
      </div>

      <div class="space-y-3 mb-6">
        <div class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-emerald-300 cursor-pointer">
          <input type="radio" name="payment_method" value="success" id="success" checked>
          <label for="success" class="flex-1 cursor-pointer">
            <div class="font-semibold text-green-600">✅ Successful Payment</div>
            <div class="text-sm text-gray-500">Simulate successful payment completion</div>
          </label>
        </div>
        <div class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-emerald-300 cursor-pointer">
          <input type="radio" name="payment_method" value="failed" id="failed">
          <label for="failed" class="flex-1 cursor-pointer">
            <div class="font-semibold text-red-600">❌ Failed Payment</div>
            <div class="text-sm text-gray-500">Simulate payment failure</div>
          </label>
        </div>
        <div class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-emerald-300 cursor-pointer">
          <input type="radio" name="payment_method" value="cancelled" id="cancelled">
          <label for="cancelled" class="flex-1 cursor-pointer">
            <div class="font-semibold text-yellow-600">⚠️ Cancelled Payment</div>
            <div class="text-sm text-gray-500">Simulate user cancellation</div>
          </label>
        </div>
      </div>

      <div class="flex space-x-3">
        <button 
          onclick="this.closest('.fixed').remove(); window.dispatchEvent(new CustomEvent('demoPaymentResult', {detail: {success: false, cancelled: true}}));"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button 
          onclick="processDemoPayment(this)"
          class="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
        >
          Process Payment
        </button>
      </div>
    </div>
  `;

  // Add global function for demo payment processing
  window.processDemoPayment = function(button) {
    const selectedMethod = document.querySelector('input[name="payment_method"]:checked').value;
    button.disabled = true;
    button.textContent = 'Processing...';
    
    setTimeout(() => {
      modal.remove();
      
      if (selectedMethod === 'success') {
        resolve({
          success: true,
          orderId: orderId,
          paymentId: `demo_${Date.now()}`,
          method: 'demo_success',
          status: 'success'
        });
      } else if (selectedMethod === 'failed') {
        reject(new Error('Payment failed - insufficient funds'));
      } else {
        resolve({
          success: false,
          orderId: orderId,
          method: 'demo_cancelled',
          status: 'cancelled',
          cancelled: true
        });
      }
    }, 2000);
  };

  return modal;
};

// Open demo payment in new window (simulated)
export const openDemoPaymentInNewWindow = async (formData) => {
  try {
    console.log('🧪 Opening demo payment in new window (simulated)');

    const orderId = generateOrderId('demo');
    
    // Instead of opening a new window, show a modal that simulates a popup
    return new Promise((resolve, reject) => {
      const popupModal = createPopupSimulationModal(formData, orderId, resolve, reject);
      document.body.appendChild(popupModal);
    });

  } catch (error) {
    console.error('Demo popup error:', error);
    throw error;
  }
};

// Create a modal that simulates a popup window
const createPopupSimulationModal = (formData, orderId, resolve, reject) => {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border-4 border-blue-500">
      <div class="text-center mb-6">
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Demo Payment Window</h3>
        <p class="text-gray-600 text-sm">Simulating Cashfree payment popup</p>
        <div class="text-xs text-blue-600 mt-2">Order ID: ${orderId}</div>
      </div>

      <div class="bg-gray-50 rounded-xl p-4 mb-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-600">Amount:</span>
          <span class="font-bold text-gray-900">₹${PRODUCT_CONFIG.price.toLocaleString('en-IN')}</span>
        </div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-600">Customer:</span>
          <span class="text-gray-800">${formData.firstName} ${formData.lastName}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Email:</span>
          <span class="text-gray-800 text-sm">${formData.email}</span>
        </div>
      </div>

      <div class="space-y-3 mb-6">
        <div class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
          <input type="radio" name="popup_payment_method" value="success" id="popup_success" checked>
          <label for="popup_success" class="flex-1 cursor-pointer">
            <div class="font-semibold text-green-600">✅ Successful Payment</div>
            <div class="text-sm text-gray-500">Simulate successful payment completion</div>
          </label>
        </div>
        <div class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
          <input type="radio" name="popup_payment_method" value="failed" id="popup_failed">
          <label for="popup_failed" class="flex-1 cursor-pointer">
            <div class="font-semibold text-red-600">❌ Failed Payment</div>
            <div class="text-sm text-gray-500">Simulate payment failure</div>
          </label>
        </div>
        <div class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
          <input type="radio" name="popup_payment_method" value="cancelled" id="popup_cancelled">
          <label for="popup_cancelled" class="flex-1 cursor-pointer">
            <div class="font-semibold text-yellow-600">⚠️ Cancelled Payment</div>
            <div class="text-sm text-gray-500">Simulate user cancellation</div>
          </label>
        </div>
      </div>

      <div class="flex space-x-3">
        <button 
          onclick="this.closest('.fixed').remove(); window.dispatchEvent(new CustomEvent('popupPaymentResult', {detail: {success: false, cancelled: true}}));"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Close Window
        </button>
        <button 
          onclick="processPopupPayment(this)"
          class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Process Payment
        </button>
      </div>
    </div>
  `;

  // Add global function for popup payment processing
  window.processPopupPayment = function(button) {
    const selectedMethod = document.querySelector('input[name="popup_payment_method"]:checked').value;
    button.disabled = true;
    button.textContent = 'Processing...';
    
    setTimeout(() => {
      modal.remove();
      
      if (selectedMethod === 'success') {
        resolve({
          success: true,
          orderId: orderId,
          paymentId: `demo_popup_${Date.now()}`,
          method: 'demo_popup_success',
          status: 'success'
        });
      } else if (selectedMethod === 'failed') {
        reject(new Error('Payment failed - insufficient funds'));
      } else {
        resolve({
          success: false,
          orderId: orderId,
          method: 'demo_popup_cancelled',
          status: 'cancelled',
          cancelled: true
        });
      }
    }, 2000);
  };

  return modal;
};

// Validate demo configuration
export const validateDemoConfig = () => {
  return {
    valid: true,
    issues: [],
    config: {
      mode: 'demo',
      price: PRODUCT_CONFIG.price,
      currency: PRODUCT_CONFIG.currency
    }
  };
};

// Get demo payment info
export const getDemoPaymentInfo = () => {
  return {
    mode: 'demo',
    price: PRODUCT_CONFIG.price,
    currency: PRODUCT_CONFIG.currency,
    configured: true,
    message: 'Demo mode - no real payments processed'
  };
}; 