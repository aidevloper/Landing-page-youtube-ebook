import React, { useState } from 'react';
import Header from '../components/ui/Header';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Icon from '../components/AppIcon';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'India',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to success page or show success message
      alert('Payment processed successfully!');
    }, 2000);
  };

  const productDetails = {
    name: 'AI YouTube Automation Ebook',
    description: 'Complete system for building six-figure faceless YouTube channels',
    price: 999,
    originalPrice: 1499,
    currency: '₹',
    bonusValue: 70000
  };

  const securityFeatures = [
    { icon: 'Shield', text: 'SSL Secured' },
    { icon: 'Lock', text: '256-bit Encryption' },
    { icon: 'CheckCircle', text: 'Secure Payment' }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: 'CreditCard' },
    { id: 'upi', name: 'UPI Payment', icon: 'Smartphone' },
    { id: 'netbanking', name: 'Net Banking', icon: 'Building' }
  ];

  const trustBadges = [
    { icon: 'Shield', text: 'Money-Back Guarantee', desc: '30-day full refund' },
    { icon: 'Users', text: '12,000+ Students', desc: 'Join successful community' },
    { icon: 'Award', text: '94.7% Success Rate', desc: 'Proven results' }
  ];

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
                        label="Email Address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                      />
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          type="text"
                          label="First Name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                        />
                        <Input
                          type="text"
                          label="Last Name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">Billing Address</h3>
                    
                    <div className="space-y-6">
                      <Input
                        type="text"
                        label="Address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        required
                        className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                      />
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <Input
                          type="text"
                          label="City"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          required
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                        />
                        <Input
                          type="text"
                          label="ZIP Code"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          required
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                        />
                        <Input
                          type="text"
                          label="Country"
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          required
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">Payment Method</h3>
                    
                    {/* Payment Options */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            paymentMethod === method.id
                              ? 'border-emerald-500 bg-emerald-50'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <Icon name={method.icon} size={24} className={
                            paymentMethod === method.id ? 'text-emerald-600' : 'text-gray-400'
                          } />
                          <div className={`text-sm mt-2 ${
                            paymentMethod === method.id ? 'text-emerald-600 font-semibold' : 'text-gray-600'
                          }`}>
                            {method.name}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Card Payment Form */}
                    {paymentMethod === 'card' && (
                      <div className="space-y-6">
                        <Input
                          type="text"
                          label="Card Number"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                        />
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <Input
                            type="text"
                            label="Expiry Date"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            placeholder="MM/YY"
                            required
                            className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                          />
                          <Input
                            type="text"
                            label="CVV"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            placeholder="123"
                            required
                            className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                          />
                          <div className="md:col-span-1"></div>
                        </div>
                        
                        <Input
                          type="text"
                          label="Name on Card"
                          value={formData.nameOnCard}
                          onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                          required
                          className="border-2 border-gray-200 focus:border-emerald-500 hover:border-emerald-300 transition-colors"
                        />
                      </div>
                    )}

                    {/* UPI Payment */}
                    {paymentMethod === 'upi' && (
                      <div className="text-center py-8">
                        <Icon name="Smartphone" size={48} className="text-emerald-600 mx-auto mb-4" />
                        <p className="text-text-secondary">
                          You will be redirected to your UPI app to complete the payment
                        </p>
                      </div>
                    )}

                    {/* Net Banking */}
                    {paymentMethod === 'netbanking' && (
                      <div className="text-center py-8">
                        <Icon name="Building" size={48} className="text-emerald-600 mx-auto mb-4" />
                        <p className="text-text-secondary">
                          You will be redirected to your bank's website to complete the payment
                        </p>
                      </div>
                    )}
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
                      className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xl py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                      iconName={isProcessing ? null : "CreditCard"}
                      iconPosition="left"
                    >
                      {isProcessing ? 'Processing...' : `Complete Purchase - ₹${productDetails.price.toLocaleString('en-IN')}`}
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
