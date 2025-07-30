import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FinalCTA = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('final-cta');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const benefits = [
    {
      icon: 'Zap',
      title: 'AI Automation System',
      description: 'Complete video creation in 12 minutes',
      value: '₹99,999'
    },
    {
      icon: 'Users',
      title: 'Private Community',
      description: '12,000+ successful students',
      value: '₹15,000'
    },
    {
      icon: 'Phone',
      title: '1-on-1 Coaching',
      description: 'Personal success strategy session',
      value: '₹10,000'
    },
    {
      icon: 'Award',
      title: 'Success Guarantee',
      description: '30-day money-back promise',
      value: 'Priceless'
    }
  ];

  const urgencyReasons = [
    'Limited-time ₹500 discount expires soon',
    'Bonus materials worth ₹10,000 included',
    'Only 100 spots available this month',
    'Price increases to ₹999 after launch period'
  ];

  const socialProof = [
    { metric: '12,000+', label: 'Success Stories' },
    { metric: '₹4.5L', label: 'Avg Monthly Income' },
    { metric: '94.7%', label: 'Success Rate' },
    { metric: '30 Days', label: 'To First Profit' }
  ];

  return (
    <section id="final-cta" className="section-padding bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-50/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container-max">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-6 animation-fade-in">
            <Icon name="Clock" size={16} />
            <span>Last Chance - Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair leading-tight">
            Your YouTube Empire{' '}
            <span className="text-emerald-400">Starts Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Join 12,000+ students who've already transformed their lives with AI automation. 
            Don't let another day pass wondering "what if" - your financial freedom is just one click away.
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
            <div className="text-white/90 text-sm mb-3">Special Launch Pricing Ends In:</div>
            <div className="flex space-x-4 text-emerald-400">
              <div className="bg-white/20 rounded-xl p-3 min-w-[70px]">
                <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-white/70">Hours</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3 min-w-[70px]">
                <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-white/70">Minutes</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3 min-w-[70px]">
                <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-white/70">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100/20 rounded-full mb-4">
                <Icon name={benefit.icon} size={24} className="text-emerald-400" />
              </div>
              <h3 className="font-bold mb-2">{benefit.title}</h3>
              <p className="text-white/80 text-sm mb-3">{benefit.description}</p>
              <div className="text-emerald-400 font-bold">{benefit.value}</div>
            </div>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow text-center">
            {/* Pricing */}
            <div className="mb-8">
              <div className="text-text-secondary line-through text-2xl mb-2">₹1,499</div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">₹999</div>
              <div className="text-success text-xl font-semibold mb-4">Save ₹500 Today!</div>
              <div className="text-text-secondary">
                Or 3 easy payments of ₹333 • No hidden fees • 30-day guarantee
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="mb-8">
              <Button
                variant="default"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xl md:text-2xl px-12 py-6 mb-4 w-full sm:w-auto"
                iconName="CreditCard"
                iconPosition="left"
                onClick={() => navigate('/checkout')}
              >
                Start My YouTube Empire Now
              </Button>
              <div className="text-text-secondary text-sm">
                Secure payment • SSL encrypted • Instant access
              </div>
            </div>

            {/* Urgency Reasons */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-primary mb-4">Why You Must Act Now:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {urgencyReasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="AlertTriangle" size={16} className="text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-900 text-sm font-semibold">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {socialProof.map((proof, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-1">
                    {proof.metric}
                  </div>
                  <div className="text-gray-900 text-sm font-semibold">{proof.label}</div>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Icon name="Shield" size={24} className="text-green-600" />
                <h3 className="font-bold text-primary">Iron-Clad Success Guarantee</h3>
              </div>
              <p className="text-gray-900 text-sm mb-3 font-semibold">
                If you don't make your first ₹1,00,000 within 60 days, we'll refund every penny 
                AND pay you ₹10,000 for your time. That's how confident we are.
              </p>
              <div className="flex justify-center items-center space-x-6 text-green-600 text-sm font-medium">
                <div className="flex items-center space-x-1">
                  <Icon name="CheckCircle" size={14} />
                  <span>30-Day Refund</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="CheckCircle" size={14} />
                  <span>94.7% Success Rate</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="CheckCircle" size={14} />
                  <span>Risk-Free Investment</span>
                </div>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Still Not Sure? Get a Free Preview
              </h3>
              <p className="text-gray-900 mb-6 font-semibold">
                Watch our exclusive 30-minute masterclass showing the exact AI system in action.
              </p>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                iconName="Play"
                iconPosition="left"
              >
                Watch Free Masterclass
              </Button>
            </div>
          </div>
        </div>

        {/* Final Motivational Message */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-playfair">
              The Choice is Yours
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-white/90">
              <div className="bg-error/20 rounded-xl p-6">
                <Icon name="X" size={32} className="text-error mx-auto mb-4" />
                <h4 className="font-bold text-error mb-3">Without This System:</h4>
                <ul className="text-sm space-y-2 text-left">
                  <li>• Continue struggling with traditional methods</li>
                  <li>• Spend months learning complex skills</li>
                  <li>• Risk never achieving financial freedom</li>
                  <li>• Watch others succeed while you stay behind</li>
                </ul>
              </div>
              <div className="bg-success/20 rounded-xl p-6">
                <Icon name="CheckCircle" size={32} className="text-success mx-auto mb-4" />
                <h4 className="font-bold text-success mb-3">With This System:</h4>
                <ul className="text-sm space-y-2 text-left">
                  <li>• Start earning within 30-45 days</li>
                  <li>• Build multiple income streams automatically</li>
                  <li>• Join 12,000+ successful students</li>
                  <li>• Achieve the financial freedom you deserve</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-white/90 text-lg mb-6">
                Don't let this opportunity slip away. Your future self will thank you for taking action today.
              </p>
              <Button
                variant="default"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xl px-10 py-4"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => navigate('/checkout')}
              >
                Yes, I Want My YouTube Empire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
