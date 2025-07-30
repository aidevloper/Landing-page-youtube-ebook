import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const filters = [
    { id: 'all', label: 'All Success Stories', count: 12 },
    { id: 'finance', label: 'Finance Niche', count: 4 },
    { id: 'health', label: 'Health & Wellness', count: 3 },
    { id: 'technology', label: 'Technology', count: 5 }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai, India',
      niche: 'finance',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      beforeIncome: '₹45,000',
      afterIncome: '₹4,20,000',
      timeframe: '90 days',
      channelName: 'Smart Money India',
      subscribers: '2.3M',
      totalViews: '45M',
      testimonial: `I was a bank employee earning ₹45,000 monthly. After implementing the AI automation system, my faceless finance channel now generates ₹4,20,000 monthly. The AI handles everything - scripts, voiceovers, thumbnails. I just choose topics and the system does the rest. My wife couldn't believe the first month's earnings!`,
      videoUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=225&fit=crop',
      linkedinVerified: true,
      channelGrowth: [
        { month: 'Month 1', subscribers: '12K', revenue: '₹25,000' },
        { month: 'Month 2', subscribers: '85K', revenue: '₹1,80,000' },
        { month: 'Month 3', subscribers: '2.3M', revenue: '₹4,20,000' }
      ]
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi, India',
      niche: 'health',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      beforeIncome: '₹0',
      afterIncome: '₹3,80,000',
      timeframe: '60 days',
      channelName: 'Wellness Wisdom',
      subscribers: '1.8M',
      totalViews: '32M',
      testimonial: `As a stay-at-home mom with zero YouTube experience, I was skeptical. But the AI system made everything so simple. I started my health channel and within 60 days, I'm earning more than my husband's corporate job. The automated content creation is incredible - I spend just 30 minutes daily managing my channel.`,
      videoUrl: 'https://images.unsplash.com/photo-1506629905607-d9c8e8b7e0d4?w=400&h=225&fit=crop',
      linkedinVerified: true,
      channelGrowth: [
        { month: 'Month 1', subscribers: '8K', revenue: '₹15,000' },
        { month: 'Month 2', subscribers: '1.8M', revenue: '₹3,80,000' }
      ]
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Bangalore, India',
      niche: 'technology',
      avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
      beforeIncome: '₹80,000',
      afterIncome: '₹6,50,000',
      timeframe: '45 days',
      channelName: 'Tech Simplified',
      subscribers: '3.1M',
      totalViews: '78M',
      testimonial: `I'm a software engineer who always wanted to create tech content but never had time. This AI system changed everything. My faceless tech channel exploded to 3.1M subscribers in 45 days. The AI creates better content than I ever could manually. I've quit my job and now focus full-time on scaling my YouTube empire.`,
      videoUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop',
      linkedinVerified: true,
      channelGrowth: [
        { month: 'Month 1', subscribers: '45K', revenue: '₹1,20,000' },
        { month: 'Month 2', subscribers: '3.1M', revenue: '₹6,50,000' }
      ]
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      location: 'Hyderabad, India',
      niche: 'finance',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      beforeIncome: '₹35,000',
      afterIncome: '₹5,20,000',
      timeframe: '75 days',
      channelName: 'Money Mastery',
      subscribers: '2.8M',
      totalViews: '56M',
      testimonial: `Working in HR, I always struggled with finances. Learning about AI automation for YouTube was a game-changer. My personal finance channel now earns ₹5,20,000 monthly. The best part? I never show my face, and the AI handles all the technical stuff. My colleagues are amazed at my transformation.`,
      videoUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=225&fit=crop',
      linkedinVerified: true,
      channelGrowth: [
        { month: 'Month 1', subscribers: '18K', revenue: '₹45,000' },
        { month: 'Month 2', subscribers: '1.2M', revenue: '₹2,80,000' },
        { month: 'Month 3', subscribers: '2.8M', revenue: '₹5,20,000' }
      ]
    }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.niche === activeFilter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => 
        prev === filteredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length]);

  const currentTestimonialData = filteredTestimonials[currentTestimonial];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-emerald-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Success Stories from{' '}
            <span className="text-emerald-600">Real Results</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Over 12,000 students have transformed their lives with our AI automation system. 
            Here are just a few success stories with verified income proof.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeFilter === filter.id
                  ? 'bg-emerald-600 text-emerald-foreground shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-emerald-100 hover:text-emerald-600'
              }`}
            >
              <span className="font-medium">{filter.label}</span>
              <span className="ml-2 text-sm opacity-70">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Main Testimonial Display */}
        {currentTestimonialData && (
          <div className="bg-white rounded-2xl p-8 card-shadow mb-12 animation-fade-in">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Testimonial Content */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={currentTestimonialData.avatar}
                    alt={currentTestimonialData.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-primary flex items-center">
                      {currentTestimonialData.name}
                      {currentTestimonialData.linkedinVerified && (
                        <Icon name="CheckCircle" size={16} className="ml-2 text-emerald-600" />
                      )}
                    </h3>
                    <p className="text-text-secondary">{currentTestimonialData.location}</p>
                    <p className="text-emerald-600 font-semibold text-sm">
                      {currentTestimonialData.channelName}
                    </p>
                  </div>
                </div>

                <blockquote className="text-text-secondary leading-relaxed mb-6 italic">
                  "{currentTestimonialData.testimonial}"
                </blockquote>

                {/* Income Transformation */}
                <div className="bg-gradient-to-r from-error/10 to-success/10 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-primary mb-4 text-center">
                    Income Transformation in {currentTestimonialData.timeframe}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-error font-bold text-2xl">
                        {currentTestimonialData.beforeIncome}
                      </div>
                      <div className="text-error text-sm">Before</div>
                    </div>
                    <div className="text-center">
                      <div className="text-success font-bold text-2xl">
                        {currentTestimonialData.afterIncome}
                      </div>
                      <div className="text-success text-sm">After</div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-emerald-600 font-bold text-lg">
                      {Math.round((parseInt(currentTestimonialData.afterIncome.replace(/[₹,]/g, '')) / parseInt(currentTestimonialData.beforeIncome.replace(/[₹,]/g, '')) - 1) * 100)}% Increase
                    </div>
                  </div>
                </div>

                {/* Channel Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <Icon name="Users" size={20} className="text-emerald-600 mx-auto mb-2" />
                    <div className="font-bold text-primary">{currentTestimonialData.subscribers}</div>
                    <div className="text-text-secondary text-sm">Subscribers</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <Icon name="Eye" size={20} className="text-emerald-600 mx-auto mb-2" />
                    <div className="font-bold text-primary">{currentTestimonialData.totalViews}</div>
                    <div className="text-text-secondary text-sm">Total Views</div>
                  </div>
                </div>
              </div>

              {/* Right: Channel Growth Chart */}
              <div>
                <div className="bg-muted rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-primary mb-4 text-center">
                    Channel Growth Timeline
                  </h4>
                  <div className="space-y-4">
                    {currentTestimonialData.channelGrowth.map((growth, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div className="font-medium text-primary">{growth.month}</div>
                        <div className="text-right">
                          <div className="text-emerald-600 font-bold">{growth.subscribers}</div>
                          <div className="text-success text-sm">{growth.revenue}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Preview */}
                <div className="relative">
                  <Image
                    src={currentTestimonialData.videoUrl}
                    alt={`${currentTestimonialData.channelName} Preview`}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center">
                    <Button
                      variant="default"
                      className="bg-white/90 text-primary hover:bg-white"
                      iconName="Play"
                      iconPosition="left"
                    >
                      Watch Success Story
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonial Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentTestimonial(prev => 
              prev === 0 ? filteredTestimonials.length - 1 : prev - 1
            )}
            iconName="ChevronLeft"
          >
            Previous
          </Button>
          
          <div className="flex space-x-2">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-emerald-600' : 'bg-border'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentTestimonial(prev => 
              prev === filteredTestimonials.length - 1 ? 0 : prev + 1
            )}
            iconName="ChevronRight"
          >
            Next
          </Button>
        </div>

        {/* Trust Statistics */}
        <div className="bg-white rounded-2xl p-8 card-shadow">
          <h3 className="text-2xl font-bold text-primary text-center mb-8 font-playfair">
            Why Students Choose Our System
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">94.7%</div>
              <div className="text-text-secondary text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">₹4.5L</div>
              <div className="text-text-secondary text-sm">Avg Monthly Income</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
              <div className="text-text-secondary text-sm">To First Profit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">12,000+</div>
              <div className="text-text-secondary text-sm">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;