import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [selectedPayment, setSelectedPayment] = useState('full');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const bonusMaterials = [
    {
      title: 'AI Tools Access (Lifetime)',
      value: '₹25,000',
      description: 'Premium AI script generator, thumbnail creator, and SEO optimizer',
      icon: 'Zap'
    },
    {
      title: 'Private Mastermind Community',
      value: '₹15,000',
      description: 'Exclusive access to our 12,000+ member success community',
      icon: 'Users'
    },
    {
      title: '1-on-1 Success Coaching Call',
      value: '₹10,000',
      description: 'Personal strategy session with our YouTube automation experts',
      icon: 'Phone'
    },
    {
      title: 'Done-For-You Templates',
      value: '₹8,000',
      description: '50+ proven video templates across all profitable niches',
      icon: 'FileText'
    },
    {
      title: 'Monetization Blueprints',
      value: '₹12,000',
      description: 'Step-by-step guides for multiple revenue streams',
      icon: 'DollarSign'
    }
  ];

  const paymentOptions = [
    {
      id: 'full',
      title: 'Full Payment',
      price: '₹999',
      originalPrice: '₹1,499',
      savings: '₹500',
      description: 'One-time payment, immediate access',
      popular: true,
      features: [
        'Immediate access to all modules',
        'All bonus materials included',
        'Lifetime updates',
        'Priority support'
      ]
    },
    {
      id: 'installment',
      title: '3 Easy Installments',
      price: '₹333',
      originalPrice: '₹1,499',
      savings: '₹1,166',
      description: 'Per month for 3 months',
      popular: false,
      features: [
        'Access to modules as you pay',
        'All bonus materials included',
        'Flexible payment schedule',
        'Standard support'
      ]
    }
  ];

  const guaranteeFeatures = [
    {
      title: '30-Day Money-Back Guarantee',
      description: 'If you don\'t see results in 30 days, get 100% refund',
      icon: 'Shield'
    },
    {
      title: 'Success Rate: 94.7%',
      description: 'Based on 12,000+ student outcomes',
      icon: 'TrendingUp'
    },
    {
      title: 'Risk-Free Investment',
      description: 'Your success is guaranteed or your money back',
      icon: 'CheckCircle'
    }
  ];

  const totalBonusValue = bonusMaterials.reduce((sum, bonus) => 
    sum + parseInt(bonus.value.replace(/[₹,]/g, '')), 0
  );

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-primary to-secondary">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Clock" size={16} />
            <span>Limited Time Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Start Your{' '}
            <span className="text-emerald-400">YouTube Empire</span>{' '}
            Today
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join 12,000+ successful students who've transformed their lives with our 
            AI-powered YouTube automation system. Limited-time pricing ends soon.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Special Launch Pricing Ends In:
          </h3>
          <div className="flex justify-center space-x-6 text-emerald-400">
            <div className="bg-white/20 rounded-xl p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm text-white/70">Hours</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm text-white/70">Minutes</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm text-white/70">Seconds</div>
            </div>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 card-shadow mb-8">
            {/* Payment Options Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-muted rounded-xl p-2 inline-flex">
                {paymentOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedPayment(option.id)}
                    className={`px-6 py-3 rounded-lg transition-all ${
                      selectedPayment === option.id
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    {option.title}
                    {option.popular && (
                      <span className="ml-2 bg-success text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Payment Option */}
            {paymentOptions.map((option) => (
              selectedPayment === option.id && (
                <div key={option.id} className="text-center mb-8 animation-fade-in">
                  <div className="text-text-secondary line-through text-xl mb-2">
                    {option.originalPrice}
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {option.price}
                  </div>
                  <div className="text-success font-semibold mb-2">
                    Save {option.savings} Today!
                  </div>
                  <div className="text-text-secondary">
                    {option.description}
                  </div>
                </div>
              )
            ))}

            {/* Course Value Breakdown */}
            <div className="bg-gradient-to-r from-emerald-50 to-success/10 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary text-center mb-6">
                What You Get (Total Value: ₹{(totalBonusValue + 10000).toLocaleString('en-IN')})
              </h3>
              
              <div className="space-y-4">
                {/* Main Course */}
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="PlayCircle" size={24} className="text-emerald-600" />
                    <div>
                      <div className="font-semibold text-primary">
                        AI YouTube Automation Ebook
                      </div>
                      <div className="text-text-secondary text-sm">
                        Complete system + lifetime access
                      </div>
                    </div>
                  </div>
                  <div className="text-emerald-600 font-bold">₹99,999</div>
                </div>

                {/* Bonus Materials */}
                {bonusMaterials.map((bonus, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name={bonus.icon} size={20} className="text-success" />
                      <div>
                        <div className="font-medium text-primary">{bonus.title}</div>
                        <div className="text-text-secondary text-sm">{bonus.description}</div>
                      </div>
                    </div>
                    <div className="text-success font-semibold">{bonus.value}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border mt-6 pt-6 text-center">
                <div className="text-2xl font-bold text-primary">
                  Total Value: ₹{(totalBonusValue + 99999).toLocaleString('en-IN')}
                </div>
                <div className="text-success font-semibold">
                  Your Price Today: ₹999 (Save ₹{(totalBonusValue + 50000).toLocaleString('en-IN')})
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-8">
              <Button
                variant="default"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xl px-12 py-4 mb-4"
                iconName="CreditCard"
                iconPosition="left"
              >
                {selectedPayment === 'full' ?'Get Instant Access - ₹999' :'Start with ₹333 Today'
                }
              </Button>
              <div className="text-text-secondary text-sm">
                Secure payment • SSL encrypted • 30-day guarantee
              </div>
            </div>

            {/* Payment Security */}
            <div className="flex justify-center items-center space-x-6 text-text-secondary text-sm mb-8">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CreditCard" size={16} className="text-emerald-600" />
                <span>All Cards Accepted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} className="text-primary" />
                <span>256-bit Encryption</span>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8 font-playfair">
              Our Iron-Clad{' '}
              <span className="text-emerald-400">Success Guarantee</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {guaranteeFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100/20 rounded-full mb-4">
                    <Icon name={feature.icon} size={24} className="text-emerald-400" />
                  </div>
                  <h4 className="font-bold mb-2">{feature.title}</h4>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 p-6 bg-white/10 rounded-xl">
              <h4 className="font-bold text-emerald-400 mb-2">
                "If you don't make your first ₹1,00,000 within 60 days, 
                we'll refund every penny AND pay you ₹10,000 for your time."
              </h4>
              <p className="text-white/80 text-sm">
                That's how confident we are in our system's ability to transform your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
