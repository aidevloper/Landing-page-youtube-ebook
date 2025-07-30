import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Icon from '../components/AppIcon';
import CashfreeConfigTest from '../components/CashfreeConfigTest';
import { CASHFREE_CONFIG, PRODUCT_CONFIG, validateCashfreeConfig, getEnvironmentInfo } from '../config/cashfree';
import { processRealCashfreePayment, openPaymentInNewWindow, validatePaymentConfig } from '../services/realCashfreeService';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'India'
  });

  const [paymentMethod, setPaymentMethod] = useState('cashfree');
  const [isProcessing, setIsProcessing] = useState(false);

  // Initialize Cashfree and validate configuration
  useEffect(() => {
    // Log environment info for debugging
    const envInfo = getEnvironmentInfo();
    console.log('🔧 Cashfree Environment:', envInfo);
    
    // Validate configuration
    validateCashfreeConfig();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const required = ['email', 'firstName', 'lastName', 'phone'];
    for (let field of required) {
      if (!formData[field]) {
        alert(`Please fill in your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    
    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid 10-digit Indian phone number');
      return false;
    }
    
    return true;
  };

  const handleCashfreePayment = async () => {
    try {
      setIsProcessing(true);

      // Validate payment configuration first
      const validation = validatePaymentConfig();
      if (!validation.valid) {
        throw new Error(`Payment not configured: ${validation.issues.join(', ')}`);
      }

      console.log('💳 Processing REAL Cashfree payment - NO SIMULATION');

      // Ask user to choose payment method
      const usePopup = confirm(
        'Choose payment method:\n\n' +
        'OK = Open payment in new window (recommended)\n' +
        'Cancel = Redirect to payment page'
      );

      if (usePopup) {
        // Open payment in new window
        const result = await openPaymentInNewWindow(formData);

        if (result.success) {
          handlePaymentSuccess(result);
        } else {
          handlePaymentCancelled(result);
        }
      } else {
        // Redirect to payment page
        await processRealCashfreePayment(formData);
        // This will redirect, so code below won't execute
      }

    } catch (error) {
      console.error('❌ Real payment error:', error);
      handlePaymentError(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = (paymentData) => {
    console.log('✅ REAL Payment successful:', paymentData);

    // Show success message for real payment
    const message = paymentData.userConfirmed
      ? `Payment completed! Order ID: ${paymentData.orderId}\n\nPlease check your Cashfree dashboard for transaction details.`
      : `Real payment processed! Order ID: ${paymentData.orderId}`;

    alert(message);

    // Redirect to success page
    setTimeout(() => {
      navigate('/success', { state: { paymentSuccess: true, paymentData, realPayment: true } });
    }, 2000);
  };

  const handlePaymentError = (error) => {
    console.error('Payment failed:', error);
    alert(`Payment failed: ${error.message || 'Something went wrong'}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    await handleCashfreePayment();
  };

  const productDetails = PRODUCT_CONFIG;

  const securityFeatures = [
    { icon: 'Shield', text: 'SSL Secured' },
    { icon: 'Lock', text: '256-bit Encryption' },
    { icon: 'CheckCircle', text: 'PCI Compliant' }
  ];

  const paymentMethods = [
    { id: 'cashfree', name: 'Cashfree (All Methods)', icon: 'CreditCard', description: 'Cards, UPI, Net Banking, Wallets' },
    { id: 'upi', name: 'UPI Payment', icon: 'Smartphone', description: 'PhonePe, Google Pay, Paytm, BHIM' },
    { id: 'netbanking', name: 'Net Banking', icon: 'Building', description: 'All major banks supported' },
    { id: 'cards', name: 'Credit/Debit Cards', icon: 'CreditCard', description: 'Visa, Mastercard, Rupay' }
  ];

  const trustBadges = [
    { icon: 'Shield', text: 'Money-Back Guarantee', desc: '30-day full refund' },
    { icon: 'Users', text: '12,000+ Students', desc: 'Join successful community' },
    { icon: 'Award', text: '94.7% Success Rate', desc: 'Proven results' }
  ];



  // Configuration status component
  const CashfreeStatus = () => {
    const validation = validatePaymentConfig();
    const envInfo = getEnvironmentInfo();

    return (
      <div className={`rounded-xl p-4 mb-6 ${
        validation.valid
          ? 'bg-red-50 border border-red-200'
          : 'bg-yellow-50 border border-yellow-200'
      }`}>
        <div className="flex items-start space-x-3">
          <Icon
            name={validation.valid ? "AlertCircle" : "AlertTriangle"}
            size={20}
            className={`mt-0.5 ${validation.valid ? 'text-red-600' : 'text-yellow-600'}`}
          />
          <div className="text-sm">
            <div className={`font-semibold mb-1 ${
              validation.valid ? 'text-red-800' : 'text-yellow-800'
            }`}>
              {validation.valid
                ? `🔴 LIVE PAYMENTS ONLY - ${envInfo.environment}`
                : '⚠️ Payment Configuration Issues'
              }
            </div>
            <div className={validation.valid ? 'text-red-700' : 'text-yellow-700'}>
              {validation.valid ? (
                <>
                  App ID: {envInfo.appId} | Real transactions will be processed
                  <br />
                  <span className="text-xs font-bold">⚠️ NO SIMULATION - Real money will be charged!</span>
                </>
              ) : (
                <>
                  Issues found: {validation.issues.join(', ')}
                  <br />
                  <span className="text-xs">Please fix these issues to enable payments</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container-max">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-playfair">
              Complete Your <span className="text-emerald-600">Purchase</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              You're just one step away from starting your YouTube automation journey
            </p>
          </div>

          {/* Configuration Test - Temporary Debug */}
          <CashfreeConfigTest />

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Column - Order Summary */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                  {/* Product Information */}
                  <div className="flex items-start space-x-4 mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                      <Icon name="BookOpen" size={24} className="text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{productDetails.name}</h3>
                      <p className="text-text-secondary text-sm">{productDetails.description}</p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gradient-to-r from-emerald-50 to-success/10 rounded-xl p-6 mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-text-secondary">Original Price:</span>
                      <span className="text-text-secondary line-through">
                        {productDetails.currency}{productDetails.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-primary">Your Price:</span>
                      <span className="text-3xl font-bold text-emerald-600">
                        {productDetails.currency}{productDetails.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-success font-medium">You Save:</span>
                      <span className="text-success font-bold">
                        {productDetails.currency}{(productDetails.originalPrice - productDetails.price).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="border-t border-emerald-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-primary">Total:</span>
                        <span className="text-3xl font-bold text-primary">
                          {productDetails.currency}{productDetails.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-primary mb-4">Why Choose Us?</h4>
                    {trustBadges.map((badge, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Icon name={badge.icon} size={16} className="text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-primary text-sm">{badge.text}</div>
                          <div className="text-text-secondary text-xs">{badge.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Checkout Form */}
              <div className="order-1 lg:order-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Contact Information */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <Input
                        type="email"
                        label="Email Address *"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                        placeholder="your@email.com"
                      />
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          type="text"
                          label="First Name *"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                          placeholder="John"
                        />
                        <Input
                          type="text"
                          label="Last Name *"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                          placeholder="Doe"
                        />
                      </div>

                      <Input
                        type="tel"
                        label="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">Payment Method</h3>
                    
                    {/* Cashfree Configuration Status */}
                    <CashfreeStatus />
                    
                    {/* Payment Options */}
                    <div className="space-y-4 mb-6">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                            paymentMethod === method.id
                              ? 'border-emerald-500 bg-emerald-50'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <Icon name={method.icon} size={24} className={
                              paymentMethod === method.id ? 'text-emerald-600' : 'text-gray-400'
                            } />
                            <div>
                              <div className={`font-semibold ${
                                paymentMethod === method.id ? 'text-emerald-600' : 'text-gray-900'
                              }`}>
                                {method.name}
                              </div>
                              <div className="text-sm text-gray-500">{method.description}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Cashfree Info */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <Icon name="CreditCard" size={20} className="text-emerald-600 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-semibold text-emerald-800 mb-1">🔴 Live Payment Processing</div>
                          <div className="text-emerald-700">
                            <strong>Real money will be charged!</strong> Your payment is processed securely through Cashfree's live payment gateway.
                            We support Cards, UPI, Net Banking, and Wallets with instant settlement.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security & Complete Purchase */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    {/* Security Features */}
                    <div className="flex justify-center items-center space-x-8 mb-8">
                      {securityFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Icon name={feature.icon} size={16} className="text-emerald-600" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Complete Purchase Button */}
                    <Button
                      type="submit"
                      variant="default"
                      size="xl"
                      fullWidth
                      loading={isProcessing}
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                      iconName={isProcessing ? null : "CreditCard"}
                      iconPosition="left"
                    >
                      {isProcessing
                        ? 'Opening Real Payment Gateway...'
                        : `🔴 REAL PAYMENT - ₹${productDetails.price.toLocaleString('en-IN')}`}
                    </Button>

                    <div className="text-center mt-4 text-sm text-text-secondary">
                      By completing your purchase, you agree to our Terms of Service and Privacy Policy
                    </div>

                    {/* Money Back Guarantee */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-success/10 rounded-xl text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Icon name="Shield" size={20} className="text-emerald-600 mr-2" />
                        <span className="font-bold text-emerald-700">30-Day Money-Back Guarantee</span>
                      </div>
                      <p className="text-sm text-text-secondary">
                        If you're not completely satisfied, get a full refund within 30 days
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
