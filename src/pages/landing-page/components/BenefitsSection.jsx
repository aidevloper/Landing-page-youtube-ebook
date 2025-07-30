import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BenefitsSection = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 'script-generation',
      icon: 'FileText',
      title: 'AI Script Generation',
      subtitle: 'From Idea to Script in 2 Minutes',
      description: 'Our AI analyzes viral content patterns and generates engaging scripts that hook viewers from the first second.',
      timeSaving: '3-4 hours saved per video',
      incomeBoost: '+40% engagement rate',
      features: [
        'Viral hook formulas',
        'SEO-optimized content',
        'Audience retention patterns',
        'Call-to-action optimization'
      ],
      demoVideo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
      beforeAfter: {
        before: 'Hours of research and writing',
        after: '2-minute AI generation'
      }
    },
    {
      id: 'thumbnail-design',
      icon: 'Image',
      title: 'Automated Thumbnail Design',
      subtitle: 'Professional Thumbnails with A/B Testing',
      description: 'AI creates multiple thumbnail variations and automatically tests which performs best for maximum click-through rates.',
      timeSaving: '1-2 hours saved per video',
      incomeBoost: '+65% click-through rate',
      features: [
        'Psychology-based design',
        'Automatic A/B testing',
        'Competitor analysis',
        'Color psychology optimization'
      ],
      demoVideo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop',
      beforeAfter: {
        before: 'Design skills and expensive software',
        after: 'AI creates and tests automatically'
      }
    },
    {
      id: 'monetization',
      icon: 'DollarSign',
      title: 'Hands-Free Monetization',
      subtitle: 'Multiple Revenue Streams on Autopilot',
      description: 'AI identifies and implements the most profitable monetization strategies for your niche automatically.',
      timeSaving: 'Continuous passive income',
      incomeBoost: '₹4,50,000+ monthly potential',
      features: [
        'AdSense optimization',
        'Affiliate marketing automation',
        'Sponsorship opportunities',
        'Product placement AI'
      ],
      demoVideo: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=225&fit=crop',
      beforeAfter: {
        before: 'Manual monetization setup',
        after: 'AI handles everything automatically'
      }
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Three AI Features That{' '}
            <span className="text-emerald-600">Guarantee Success</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Each feature is designed to eliminate a major barrier that stops 90% of YouTubers 
            from succeeding. Hover over each benefit to see the transformation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group relative bg-white rounded-2xl p-8 card-shadow hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredBenefit(benefit.id)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <Icon name={benefit.icon} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 font-playfair">
                    {benefit.title}
                  </h3>
                  <p className="text-emerald-600 font-semibold text-sm">
                    {benefit.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-success/10 rounded-lg p-3 text-center">
                    <Icon name="Clock" size={16} className="text-success mx-auto mb-1" />
                    <div className="text-xs text-success font-semibold">
                      {benefit.timeSaving}
                    </div>
                  </div>
                  <div className="bg-emerald-100 rounded-lg p-3 text-center">
                    <Icon name="TrendingUp" size={16} className="text-emerald-600 mx-auto mb-1" />
                    <div className="text-xs text-emerald-600 font-semibold">
                      {benefit.incomeBoost}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {benefit.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Content - Demo Preview */}
                {hoveredBenefit === benefit.id && (
                  <div className="animation-fade-in">
                    <div className="border-t border-border pt-6">
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <Icon name="Play" size={16} className="mr-2 text-emerald-600" />
                        Live Demo Preview
                      </h4>
                      <div className="relative mb-4">
                        <Image
                          src={benefit.demoVideo}
                          alt={`${benefit.title} Demo`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                          <div className="bg-emerald-600 text-white p-2 rounded-full">
                            <Icon name="Play" size={16} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted rounded-lg p-3">
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <div className="text-error font-semibold mb-1">Before:</div>
                            <div className="text-text-secondary">{benefit.beforeAfter.before}</div>
                          </div>
                          <div>
                            <div className="text-success font-semibold mb-1">After:</div>
                            <div className="text-text-secondary">{benefit.beforeAfter.after}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Combined Benefits Showcase */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-playfair">
                When Combined: The Ultimate{' '}
                <span className="text-emerald-400">YouTube Machine</span>
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                These three AI systems work together to create a completely automated 
                YouTube empire that generates content, optimizes performance, and 
                maximizes revenue 24/7.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" size={20} className="text-emerald-400" />
                  <span>Complete video creation in under 15 minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Target" size={20} className="text-emerald-400" />
                  <span>Automatic optimization for maximum engagement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="DollarSign" size={20} className="text-emerald-400" />
                  <span>Multiple revenue streams activated simultaneously</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="TrendingUp" size={20} className="text-emerald-400" />
                  <span>Continuous improvement through AI learning</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <h4 className="text-xl font-bold mb-4 text-emerald-400">
                  Average Student Results
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-400">12 min</div>
                    <div className="text-sm text-white/80">Per Video</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-success">₹4.5L</div>
                    <div className="text-sm text-white/80">Monthly</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-400">94.7%</div>
                    <div className="text-sm text-white/80">Success Rate</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-success">30 days</div>
                    <div className="text-sm text-white/80">To Profit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;