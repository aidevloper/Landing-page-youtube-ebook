import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentStudentCount, setCurrentStudentCount] = useState(12847);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    // Animate student counter
    const interval = setInterval(() => {
      setCurrentStudentCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Countdown timer
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

  const handleWatchPreview = () => {
    const videoElement = document.getElementById('preview-video');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen premium-gradient overflow-hidden">
      {/* Enhanced Background Elements with Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success/15 rounded-full blur-3xl floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/10 rounded-full blur-3xl pulse-glow"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-success rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content with Enhanced Animations */}
          <div className="text-center lg:text-left space-y-6">
            {/* Enhanced Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-100/20 backdrop-blur-sm text-emerald-400 px-6 py-3 rounded-full text-sm font-medium mb-6 animation-fade-in glow-effect">
              <Icon name="TrendingUp" size={16} />
              <span>Trusted by {currentStudentCount.toLocaleString('en-IN')}+ Students</span>
            </div>

            {/* Enhanced Main Headline with Gradient Text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-playfair animation-slide-up">
              Build Your{' '}
              <span className="gradient-text">Six-Figure</span>{' '}
              Faceless YouTube Empire{' '}
              <span className="text-success">in 30 Days</span>
            </h1>

            {/* Enhanced Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animation-fade-in-delayed">
              Master AI automation to create viral content without showing your face, 
              editing videos, or any technical skills. Complete beginners are earning
              <span className="text-emerald-400 font-semibold glow-effect px-2 py-1 rounded-md"> ₹4,50,000+ monthly</span> 
              with our proven system.
            </p>

            {/* Enhanced Key Benefits with Stagger Animation */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2 text-white/90 stagger-animation premium-card bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <Icon name="CheckCircle" size={20} className="text-success" />
                <span className="text-sm font-medium">No Camera Required</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 stagger-animation premium-card bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <Icon name="CheckCircle" size={20} className="text-success" />
                <span className="text-sm font-medium">AI Does Everything</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 stagger-animation premium-card bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <Icon name="CheckCircle" size={20} className="text-success" />
                <span className="text-sm font-medium">30-Day Guarantee</span>
              </div>
            </div>

            {/* Enhanced Pricing & CTA */}
            {/* <div className="premium-card bg-white/15 backdrop-blur-md rounded-2xl p-6 mb-8 glow-effect animation-zoom-in">
              <div className="text-center mb-4">
                <div className="text-white/70 text-sm mb-2">Limited Time Offer Ends In:</div>
                <div className="flex justify-center space-x-4 text-accent font-bold text-2xl">
                  <div className="accent-gradient px-4 py-3 rounded-xl shadow-lg animation-scale-hover">
                    <div className="text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-white/90">Hours</div>
                  </div>
                  <div className="accent-gradient px-4 py-3 rounded-xl shadow-lg animation-scale-hover">
                    <div className="text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-white/90">Minutes</div>
                  </div>
                  <div className="accent-gradient px-4 py-3 rounded-xl shadow-lg animation-scale-hover">
                    <div className="text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-white/90">Seconds</div>
                  </div>
                </div>
              </div> */}

              {/* <div className="text-center mb-6">
                <div className="text-white/70 line-through text-lg">₹1,499</div>
                <div className="gradient-text text-4xl font-bold">₹999</div>
                <div className="text-success text-sm font-semibold pulse-glow px-2 py-1 rounded-md">Save ₹500 Today!</div>
              </div> */}

              {/* <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  className="accent-gradient hover:scale-105 text-white text-lg py-4 font-semibold shadow-lg transition-all duration-300 glow-effect"
                  iconName="CreditCard"
                  iconPosition="left"
                >
                  Get Instant Access - ₹999
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  className="border-white/30 text-white hover:bg-white/20 hover:scale-105 text-sm py-3 transition-all duration-300"
                  iconName="Play"
                  iconPosition="left"
                  onClick={handleWatchPreview}
                >
                  Watch Free Preview
                </Button>
              </div> */}

              {/* <div className="text-center text-white/70 text-xs mt-4">
                Or 3 easy payments of ₹333 • 30-day money-back guarantee
              </div>
            </div> */}

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-6 text-white/80 text-sm">
              <div className="flex items-center space-x-2 stagger-animation">
                <Icon name="Shield" size={16} className="text-success" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 stagger-animation">
                <Icon name="Users" size={16} className="text-emerald-400" />
                <span>12,000+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-2 stagger-animation">
                <Icon name="Star" size={16} className="text-emerald-400" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Hero Image with Premium Asset */}
          <div className="relative animation-fade-in-delayed">
            <div className="relative z-20">
              <div className="premium-card p-4 bg-white/10 backdrop-blur-md rounded-3xl glow-effect floating-animation">
                <Image
                  src="/assets/images/youtube1-1753769145253.jpg"
                  alt="Build a Six-Figure Faceless YouTube Channel in 2025 - AI Powered Ebook"
                  className="w-full h-auto rounded-2xl shadow-2xl animation-zoom-in"
                />
              </div>
              
              {/* Enhanced Floating Success Metrics with Premium Styling */}
              <div className="absolute -top-6 -left-6 success-gradient text-white px-6 py-3 rounded-xl shadow-2xl animation-fade-in floating-animation pulse-glow">
                <div className="text-xs font-medium">Monthly Revenue</div>
                <div className="text-xl font-bold">₹4,50,000+</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 emerald-gradient text-white px-6 py-3 rounded-xl shadow-2xl animation-fade-in floating-animation glow-effect" style={{animationDelay: '0.5s'}}>
                <div className="text-xs font-medium">Success Rate</div>
                <div className="text-xl font-bold">94.7%</div>
              </div>
              
              <div className="absolute top-1/2 -right-10 premium-card bg-white text-primary px-4 py-3 rounded-xl shadow-2xl animation-fade-in floating-animation" style={{animationDelay: '1s'}}>
                <div className="text-xs font-medium">Avg. Setup Time</div>
                <div className="text-sm font-bold">30 Days</div>
              </div>

              {/* Additional floating elements for premium look */}
              <div className="absolute top-1/4 -left-8 bg-success/20 backdrop-blur-sm text-success px-3 py-2 rounded-lg shadow-lg animation-fade-in floating-animation" style={{animationDelay: '1.5s'}}>
                <div className="text-xs font-medium">AI Powered</div>
              </div>
            </div>

            {/* Enhanced Background Decoration with Multiple Layers */}
            <div className="absolute inset-0 z-10">
              <div className="absolute inset-0 emerald-gradient rounded-3xl blur-2xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="absolute inset-0 success-gradient rounded-3xl blur-xl transform -rotate-2 scale-110 opacity-15"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <Icon name="ChevronDown" size={24} />
          <span className="text-xs font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;