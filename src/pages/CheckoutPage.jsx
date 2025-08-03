import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Icon from '../components/AppIcon';
import RazorpayStatus from '../components/RazorpayStatus';
import { RAZORPAY_CONFIG, PRODUCT_CONFIG, validateRazorpayConfig, getEnvironmentInfo } from '../config/payment';

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

  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);

  // Load Razorpay script and validate configuration
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    // Log environment info for debugging
    const envInfo = getEnvironmentInfo();
    console.log('🔧 Razorpay Environment:', envInfo);

    // Validate configuration
    validateRazorpayConfig();

    return () => {
      document.body.removeChild(script);
    };
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

  const createRazorpayOrder = async () => {
    try {
      // In a real application, this would be your backend API
      // For demo purposes, we'll simulate the order creation
      const orderData = {
        amount: productDetails.price * 100, // amount in paise
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
        notes: {
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          product: productDetails.name
        }
      };

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Return simulated order response
      return {
        id: `order_${Date.now()}`,
        ...orderData
      };
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const handleRazorpayPayment = async () => {
    try {
      setIsProcessing(true);
      
      // Create order
      const order = await createRazorpayOrder();
      setOrderCreated(true);

      const options = {
        key: RAZORPAY_CONFIG.key_id,
        amount: order.amount,
        currency: order.currency,
        name: RAZORPAY_CONFIG.name,
        description: RAZORPAY_CONFIG.description,
        image: RAZORPAY_CONFIG.image,
        order_id: order.id,
        handler: function (response) {
          // Payment successful
          console.log('Payment successful:', response);
          handlePaymentSuccess(response);
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          address: `${formData.address}, ${formData.city}, ${formData.zipCode}`
        },
        theme: RAZORPAY_CONFIG.theme,
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
            setOrderCreated(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        handlePaymentError(response.error);
      });
      
      rzp.open();
    } catch (error) {
      console.error('Payment initiation error:', error);
      alert('Failed to initiate payment. Please try again.');
      setIsProcessing(false);
      setOrderCreated(false);
    }
  };

  const handlePaymentSuccess = (response) => {
    // In a real application, verify the payment on your backend
    console.log('Payment verification would happen here:', response);
    
    setIsProcessing(false);
    setOrderCreated(false);
    
    // Show success message and redirect
    alert(`Payment successful! Transaction ID: ${response.razorpay_payment_id}`);
    
    // Redirect to success page or dashboard
    setTimeout(() => {
      navigate('/', { state: { paymentSuccess: true } });
    }, 2000);
  };

  const handlePaymentError = (error) => {
    console.error('Payment failed:', error);
    setIsProcessing(false);
    setOrderCreated(false);
    
    alert(`Payment failed: ${error.description || 'Something went wrong'}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (paymentMethod === 'razorpay') {
      await handleRazorpayPayment();
    } else if (paymentMethod === 'upi') {
      // Handle UPI payment
      await handleRazorpayPayment(); // Razorpay supports UPI
    } else if (paymentMethod === 'netbanking') {
      // Handle Net Banking
      await handleRazorpayPayment(); // Razorpay supports Net Banking
    }
  };

  const productDetails = PRODUCT_CONFIG;

  const securityFeatures = [
    { icon: 'Shield', text: 'SSL Secured' },
    { icon: 'Lock', text: '256-bit Encryption' },
    { icon: 'CheckCircle', text: 'PCI Compliant' }
  ];

  const paymentMethods = [
    { id: 'razorpay', name: 'Razorpay (All Methods)', icon: 'CreditCard', description: 'Cards, UPI, Net Banking, Wallets' },
    { id: 'upi', name: 'UPI Payment', icon: 'Smartphone', description: 'PhonePe, Google Pay, Paytm' },
    { id: 'netbanking', name: 'Net Banking', icon: 'Building', description: 'All major banks supported' }
  ];

  const trustBadges = [
    { icon: 'Shield', text: 'Money-Back Guarantee', desc: '30-day full refund' },
    { icon: 'Users', text: '12,000+ Students', desc: 'Join successful community' },
    { icon: 'Award', text: '94.7% Success Rate', desc: 'Proven results' }
  ];

  const handleDemoPayment = () => {
    // Demo function for testing without real payment
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Demo payment successful! In production, this would process a real payment.');
      navigate('/', { state: { paymentSuccess: true } });
    }, 2000);
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

                  {/* Bonus Value */}
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 mb-8">
                    <div className="flex items-center mb-3">
                      <Icon name="Gift" size={20} className="text-yellow-600 mr-2" />
                      <h4 className="font-bold text-primary">Bonus Materials Included</h4>
                    </div>
                    <p className="text-sm text-text-secondary mb-2">
                      Get ₹{productDetails.bonusValue.toLocaleString('en-IN')} worth of bonus materials FREE
                    </p>
                    <ul className="text-xs space-y-1 text-text-secondary">
                      <li>• AI Tools Access (Lifetime)</li>
                      <li>• Private Mastermind Community</li>
                      <li>• 1-on-1 Success Coaching Call</li>
                      <li>• Done-For-You Templates</li>
                      <li>• Monetization Blueprints</li>
                    </ul>
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

                  {/* Billing Address (Optional) */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">Billing Address (Optional)</h3>
                    
                    <div className="space-y-6">
                      <Input
                        type="text"
                        label="Address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                        placeholder="123 Main Street"
                      />
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <Input
                          type="text"
                          label="City"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                          placeholder="Mumbai"
                        />
                        <Input
                          type="text"
                          label="ZIP Code"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                          placeholder="400001"
                        />
                        <Input
                          type="text"
                          label="Country"
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                          placeholder="India"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">Payment Method</h3>

                    {/* Razorpay Configuration Status */}
                    <RazorpayStatus />

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

                    {/* Razorpay Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-semibold text-blue-800 mb-1">Secure Payment via Razorpay</div>
                          <div className="text-blue-700">
                            Your payment is processed securely through Razorpay. We support all major payment methods including cards, UPI, net banking, and digital wallets.
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

                    {/* Complete Purchase Buttons */}
                    <div className="space-y-4">
                      <Button
                        type="submit"
                        variant="default"
                        size="xl"
                        fullWidth
                        loading={isProcessing}
                        disabled={orderCreated}
                        className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xl py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                        iconName={isProcessing ? null : "CreditCard"}
                        iconPosition="left"
                      >
                        {isProcessing 
                          ? (orderCreated ? 'Opening Payment Gateway...' : 'Processing...') 
                          : `Pay ₹${productDetails.price.toLocaleString('en-IN')} Securely`}
                      </Button>

                      {/* Demo Payment Button */}
                      <Button
                        type="button"
                        variant="outline"
                        size="xl"
                        fullWidth
                        onClick={handleDemoPayment}
                        className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold py-6 rounded-xl transition-all duration-200"
                        iconName="Play"
                        iconPosition="left"
                      >
                        Try Demo Payment (Testing)
                      </Button>
                    </div>

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
