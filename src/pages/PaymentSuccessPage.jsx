import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';
import Button from '../components/ui/Button';
import Icon from '../components/AppIcon';

const PaymentSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paymentData = location.state?.paymentData;

  useEffect(() => {
    // If no payment data, redirect to home
    if (!location.state?.paymentSuccess) {
      navigate('/');
    }
  }, [location.state, navigate]);

  const handleDownload = () => {
    // In a real application, this would download the actual ebook
    alert('Download link would be sent to your email! Check your inbox.');
  };

  const handleAccessCommunity = () => {
    // In a real application, this would redirect to the community platform
    alert('Community access link would be provided here!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Success Animation */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mb-6 animate-bounce">
                <Icon name="CheckCircle" size={48} className="text-white" />
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-playfair">
              🎉 Payment Successful!
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Congratulations! You've successfully purchased the AI YouTube Automation Ebook. 
              Your journey to building a six-figure YouTube empire starts now!
            </p>

            {/* Payment Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-left max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">Order Confirmation</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-text-secondary">Product:</span>
                  <span className="font-semibold text-primary">AI YouTube Automation Ebook</span>
                </div>
                
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-text-secondary">Amount Paid:</span>
                  <span className="font-bold text-emerald-600 text-xl">₹799</span>
                </div>
                
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-text-secondary">Transaction ID:</span>
                  <span className="font-mono text-sm text-primary">
                    {paymentData?.paymentId || `TXN${Date.now()}`}
                  </span>
                </div>
                
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-text-secondary">Status:</span>
                  <span className="flex items-center text-emerald-600 font-semibold">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    Completed
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Date:</span>
                  <span className="text-primary">{new Date().toLocaleDateString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">What Happens Next?</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-left">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon name="Mail" size={20} className="text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-primary">Check Your Email</h4>
                  </div>
                  <p className="text-text-secondary text-sm">
                    We've sent your ebook download link and bonus materials to your email address. 
                    Check your inbox (and spam folder) within the next 5 minutes.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-left">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon name="Users" size={20} className="text-blue-600" />
                    </div>
                    <h4 className="font-bold text-primary">Join the Community</h4>
                  </div>
                  <p className="text-text-secondary text-sm">
                    Get exclusive access to our private mastermind community with 12,000+ successful students. 
                    Network, share, and learn together.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-left">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon name="BookOpen" size={20} className="text-purple-600" />
                    </div>
                    <h4 className="font-bold text-primary">Start Learning</h4>
                  </div>
                  <p className="text-text-secondary text-sm">
                    Begin with Chapter 1 and follow our step-by-step system. 
                    Most students see their first results within 30-45 days.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-left">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon name="Phone" size={20} className="text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-primary">1-on-1 Coaching</h4>
                  </div>
                  <p className="text-text-secondary text-sm">
                    Schedule your free success coaching call within 7 days to get personalized guidance 
                    for your YouTube automation journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleDownload}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Your Ebook
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleAccessCommunity}
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4"
                  iconName="Users"
                  iconPosition="left"
                >
                  Access Community
                </Button>
              </div>
            </div>

            {/* Bonus Materials */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-left">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">Your Bonus Materials (₹70,000 Value)</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                  <Icon name="Zap" size={20} className="text-emerald-600" />
                  <div>
                    <div className="font-semibold text-primary">AI Tools Access</div>
                    <div className="text-sm text-text-secondary">Lifetime access to premium AI tools</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Icon name="Users" size={20} className="text-blue-600" />
                  <div>
                    <div className="font-semibold text-primary">Private Community</div>
                    <div className="text-sm text-text-secondary">Exclusive mastermind group</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Icon name="FileText" size={20} className="text-purple-600" />
                  <div>
                    <div className="font-semibold text-primary">Video Templates</div>
                    <div className="text-sm text-text-secondary">50+ done-for-you templates</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <Icon name="DollarSign" size={20} className="text-yellow-600" />
                  <div>
                    <div className="font-semibold text-primary">Monetization Guide</div>
                    <div className="text-sm text-text-secondary">Multiple revenue stream blueprints</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <p className="text-text-secondary mb-4">
                Need help? Contact our support team at support@youtubeautomation.com
              </p>
              
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-emerald-600 hover:text-emerald-700"
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Back to Homepage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
