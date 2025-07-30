import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IncomeCalculator = () => {
  const navigate = useNavigate();
  const [desiredIncome, setDesiredIncome] = useState(300000);
  const [selectedNiche, setSelectedNiche] = useState('finance');
  const [calculations, setCalculations] = useState({});

  const niches = [
    {
      id: 'finance',
      name: 'Personal Finance',
      cpm: 6.5, // ₹ per 1000 views
      conversionRate: 0.12, // 12% for affiliate products
      avgCommission: 2500,
      icon: 'DollarSign',
      color: 'text-success'
    },
    {
      id: 'health',
      name: 'Health & Wellness',
      cpm: 4.8,
      conversionRate: 0.08,
      avgCommission: 1800,
      icon: 'Heart',
      color: 'text-error'
    },
    {
      id: 'technology',
      name: 'Technology',
      cpm: 8.2,
      conversionRate: 0.15,
      avgCommission: 3200,
      icon: 'Smartphone',
      color: 'text-primary'
    },
    {
      id: 'business',
      name: 'Business & Entrepreneurship',
      cpm: 9.5,
      conversionRate: 0.18,
      avgCommission: 4500,
      icon: 'Briefcase',
      color: 'text-accent'
    }
  ];

  const incomeRanges = [
    { value: 100000, label: '₹1,00,000' },
    { value: 200000, label: '₹2,00,000' },
    { value: 300000, label: '₹3,00,000' },
    { value: 500000, label: '₹5,00,000' },
    { value: 1000000, label: '₹10,00,000' }
  ];

  useEffect(() => {
    const niche = niches.find(n => n.id === selectedNiche);
    if (!niche) return;

    // Calculate required metrics
    const adRevenue = desiredIncome * 0.6; // 60% from ads
    const affiliateRevenue = desiredIncome * 0.4; // 40% from affiliates

    const requiredViews = Math.ceil(adRevenue / (niche.cpm / 1000));
    const requiredAffiliateConversions = Math.ceil(affiliateRevenue / niche.avgCommission);
    const totalViewsForAffiliates = Math.ceil(requiredAffiliateConversions / niche.conversionRate);
    
    const totalViews = Math.max(requiredViews, totalViewsForAffiliates);
    const videosPerMonth = Math.ceil(totalViews / 50000); // Assuming 50k avg views per video
    const videosPerWeek = Math.ceil(videosPerMonth / 4);
    const timePerVideo = 12; // minutes with AI
    const totalTimeDaily = Math.ceil((videosPerWeek * timePerVideo) / 7);

    setCalculations({
      totalViews,
      videosPerMonth,
      videosPerWeek,
      totalTimeDaily,
      adRevenue: Math.ceil(adRevenue),
      affiliateRevenue: Math.ceil(affiliateRevenue),
      requiredConversions: requiredAffiliateConversions
    });
  }, [desiredIncome, selectedNiche]);

  const currentNiche = niches.find(n => n.id === selectedNiche);

  return (
    <section className="section-padding bg-gradient-to-br from-muted to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Calculate Your{' '}
            <span className="text-emerald-600">Income Potential</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Use our AI-powered calculator to see exactly how much you can earn 
            and what it takes to reach your financial goals with YouTube automation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">
                Your Goals & Preferences
              </h3>

              {/* Desired Income Slider */}
              <div className="mb-8">
                <label className="block text-primary font-semibold mb-4">
                  Desired Monthly Income: ₹{desiredIncome.toLocaleString('en-IN')}
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="50000"
                    value={desiredIncome}
                    onChange={(e) => setDesiredIncome(parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${((desiredIncome - 50000) / (1000000 - 50000)) * 100}%, var(--color-muted) ${((desiredIncome - 50000) / (1000000 - 50000)) * 100}%, var(--color-muted) 100%)`
                    }}
                  />
                  <div className="flex justify-between text-text-secondary text-sm mt-2">
                    <span>₹50,000</span>
                    <span>₹10,00,000</span>
                  </div>
                </div>
                
                {/* Quick Select Buttons */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {incomeRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setDesiredIncome(range.value)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${
                        desiredIncome === range.value
                          ? 'bg-emerald-600 text-white'
                          : 'bg-muted text-text-secondary hover:bg-emerald-50'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Niche Selection */}
              <div className="mb-8">
                <label className="block text-primary font-semibold mb-4">
                  Choose Your Niche
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {niches.map((niche) => (
                    <button
                      key={niche.id}
                      onClick={() => setSelectedNiche(niche.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        selectedNiche === niche.id
                          ? 'border-emerald-200 bg-emerald-50 shadow-md'
                          : 'border-border bg-white hover:border-emerald-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon name={niche.icon} size={20} className={niche.color} />
                        <div>
                          <div className="font-medium text-primary">{niche.name}</div>
                          <div className="text-text-secondary text-sm">
                            ₹{niche.cpm}/1K views • {(niche.conversionRate * 100).toFixed(0)}% conversion
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Niche Details */}
              {currentNiche && (
                <div className="bg-gradient-to-r from-emerald-50 to-success/10 rounded-xl p-6">
                  <h4 className="font-bold text-primary mb-3 flex items-center">
                    <Icon name={currentNiche.icon} size={20} className={`mr-2 ${currentNiche.color}`} />
                    {currentNiche.name} Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-emerald-600">₹{currentNiche.cpm}</div>
                      <div className="text-text-secondary text-xs">Per 1K Views</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-success">{(currentNiche.conversionRate * 100).toFixed(0)}%</div>
                      <div className="text-text-secondary text-xs">Conversion Rate</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">₹{currentNiche.avgCommission.toLocaleString('en-IN')}</div>
                      <div className="text-text-secondary text-xs">Avg Commission</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Results Display */}
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">
                Your Success Roadmap
              </h3>

              {calculations.totalViews && (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-100 rounded-xl p-4 text-center">
                      <Icon name="Eye" size={24} className="text-emerald-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">
                        {(calculations.totalViews / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-text-secondary text-sm">Monthly Views Needed</div>
                    </div>
                    <div className="bg-success/10 rounded-xl p-4 text-center">
                      <Icon name="PlayCircle" size={24} className="text-success mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">
                        {calculations.videosPerMonth}
                      </div>
                      <div className="text-text-secondary text-sm">Videos Per Month</div>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-4 text-center">
                      <Icon name="Calendar" size={24} className="text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">
                        {calculations.videosPerWeek}
                      </div>
                      <div className="text-text-secondary text-sm">Videos Per Week</div>
                    </div>
                    <div className="bg-warning/10 rounded-xl p-4 text-center">
                      <Icon name="Clock" size={24} className="text-warning mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">
                        {calculations.totalTimeDaily} min
                      </div>
                      <div className="text-text-secondary text-sm">Daily Time Investment</div>
                    </div>
                  </div>

                  {/* Revenue Breakdown */}
                  <div className="bg-gradient-to-r from-success/10 to-accent/10 rounded-xl p-6">
                    <h4 className="font-bold text-primary mb-4 text-center">
                      Monthly Revenue Breakdown
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="Youtube" size={16} className="text-error" />
                          <span className="text-primary">YouTube Ad Revenue</span>
                        </div>
                        <span className="font-bold text-success">
                          ₹{calculations.adRevenue.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="Link" size={16} className="text-accent" />
                          <span className="text-primary">Affiliate Commissions</span>
                        </div>
                        <span className="font-bold text-success">
                          ₹{calculations.affiliateRevenue.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="border-t border-border pt-3">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-primary">Total Monthly Income</span>
                          <span className="font-bold text-accent text-xl">
                            ₹{desiredIncome.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="bg-muted rounded-xl p-6">
                    <h4 className="font-bold text-primary mb-4 text-center">
                      Expected Timeline to Goal
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <div className="font-medium text-primary">Month 1-2: Foundation</div>
                          <div className="text-text-secondary text-sm">Channel setup, first videos, monetization approval</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <div className="font-medium text-primary">Month 3-4: Growth</div>
                          <div className="text-text-secondary text-sm">Scaling content, building audience, first significant income</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <div className="font-medium text-primary">Month 5-6: Target Achievement</div>
                          <div className="text-text-secondary text-sm">Reaching your ₹{desiredIncome.toLocaleString('en-IN')} monthly goal</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-6 border-t border-border">
                    <p className="text-text-secondary mb-4">
                      Ready to turn this calculation into reality?
                    </p>
                    <Button
                      variant="default"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      iconName="ArrowRight"
                      iconPosition="right"
                      onClick={() => navigate('/checkout')}
                    >
                      Start Your Journey - ₹999
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Success Stories Related to Calculator */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Students Who Achieved Similar Goals
            </h3>
            <p className="text-white/90">
              See how others reached the ₹{desiredIncome.toLocaleString('en-IN')} milestone
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-accent font-bold text-2xl mb-2">₹4,20,000</div>
              <div className="text-white/90 text-sm mb-2">Rajesh K. - Finance Niche</div>
              <div className="text-white/70 text-xs">Achieved in 90 days</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-accent font-bold text-2xl mb-2">₹6,50,000</div>
              <div className="text-white/90 text-sm mb-2">Amit P. - Technology</div>
              <div className="text-white/70 text-xs">Achieved in 45 days</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-accent font-bold text-2xl mb-2">₹5,20,000</div>
              <div className="text-white/90 text-sm mb-2">Sneha R. - Finance</div>
              <div className="text-white/70 text-xs">Achieved in 75 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeCalculator;
