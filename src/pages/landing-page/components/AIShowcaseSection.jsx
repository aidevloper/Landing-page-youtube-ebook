import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AIShowcaseSection = () => {
  const navigate = useNavigate();
  const [activeDemo, setActiveDemo] = useState('finance');
  const [isGenerating, setIsGenerating] = useState(false);

  const niches = [
    {
      id: 'finance',
      name: 'Personal Finance',
      icon: 'DollarSign',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      id: 'health',
      name: 'Health & Wellness',
      icon: 'Heart',
      color: 'text-error',
      bgColor: 'bg-error/10'
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: 'Smartphone',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  const demoContent = {
    finance: {
      title: '5 Investment Mistakes That Cost You Millions',
      script: `Did you know that 90% of people make these critical investment mistakes that cost them millions over their lifetime?\n\nMistake #1: Not starting early enough. The power of compound interest is incredible...\n\nMistake #2: Putting all eggs in one basket. Diversification is key to reducing risk...\n\nMistake #3: Emotional investing. Fear and greed are your worst enemies...`,
      thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=225&fit=crop',
      voiceover: 'Professional male voice with financial expertise tone',
      stats: {
        views: '2.3M',
        engagement: '94%',
        revenue: '₹45,000'
      }
    },
    health: {
      title: '7 Morning Habits That Transform Your Health',
      script: `Your morning routine determines your entire day. Here are 7 scientifically-proven habits that will transform your health...\n\nHabit #1: Drink water immediately upon waking. Your body is dehydrated after 8 hours...\n\nHabit #2: Get sunlight within 30 minutes. This regulates your circadian rhythm...\n\nHabit #3: Move your body for 10 minutes. Even light exercise boosts energy...`,
      thumbnail: 'https://images.unsplash.com/photo-1506629905607-d9c8e8b7e0d4?w=400&h=225&fit=crop',
      voiceover: 'Energetic female voice with wellness expertise',
      stats: {
        views: '1.8M',
        engagement: '91%',
        revenue: '₹38,000'
      }
    },
    technology: {
      title: 'AI Tools That Will Replace Your Job in 2024',
      script: `Artificial Intelligence is advancing faster than ever. Here are the AI tools that could replace entire job categories in 2024...\n\nTool #1: ChatGPT for content writing. It can write articles, emails, and reports...\n\nTool #2: Midjourney for graphic design. Creates professional designs in seconds...\n\nTool #3: GitHub Copilot for programming. Writes code faster than humans...`,
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop',
      voiceover: 'Tech-savvy male voice with authority',
      stats: {
        views: '3.1M',
        engagement: '96%',
        revenue: '₹52,000'
      }
    }
  };

  const traditionalSteps = [
    { step: 1, task: 'Research Topic', time: '2-3 hours', difficulty: 'Medium' },
    { step: 2, task: 'Write Script', time: '3-4 hours', difficulty: 'Hard' },
    { step: 3, task: 'Record Voiceover', time: '2-3 hours', difficulty: 'Hard' },
    { step: 4, task: 'Create Thumbnail', time: '1-2 hours', difficulty: 'Medium' },
    { step: 5, task: 'Edit Video', time: '4-6 hours', difficulty: 'Very Hard' },
    { step: 6, task: 'Upload & Optimize', time: '1 hour', difficulty: 'Medium' }
  ];

  const aiSteps = [
    { step: 1, task: 'Choose Niche', time: '30 seconds', difficulty: 'Easy' },
    { step: 2, task: 'AI Generates Script', time: '2 minutes', difficulty: 'Easy' },
    { step: 3, task: 'AI Creates Voiceover', time: '3 minutes', difficulty: 'Easy' },
    { step: 4, task: 'AI Designs Thumbnail', time: '1 minute', difficulty: 'Easy' },
    { step: 5, task: 'AI Assembles Video', time: '5 minutes', difficulty: 'Easy' },
    { step: 6, task: 'Auto Upload & SEO', time: '1 minute', difficulty: 'Easy' }
  ];

  const handleGenerateDemo = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            AI-Powered{' '}
            <span className="text-emerald-600">Viral Content</span>{' '}
            Creation
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            See the exact AI tools and process that creates professional YouTube videos 
            in minutes, not months. Choose any niche and watch the magic happen.
          </p>
        </div>

        {/* Niche Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted rounded-xl p-2">
            {niches.map((niche) => (
              <button
                key={niche.id}
                onClick={() => setActiveDemo(niche.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                  activeDemo === niche.id
                    ? 'bg-white shadow-md text-primary'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                <Icon name={niche.icon} size={20} className={niche.color} />
                <span className="font-medium">{niche.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional Way */}
          <div className="bg-error/5 rounded-2xl p-8 border border-error/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-error/10 text-error px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Icon name="AlertTriangle" size={16} />
                <span>Traditional Method</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2 font-playfair">
                The Old, Broken Way
              </h3>
              <p className="text-text-secondary">
                13-19 hours per video, multiple skills required
              </p>
            </div>

            <div className="space-y-4">
              {traditionalSteps.map((item) => (
                <div key={item.step} className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-error/20">
                  <div className="w-8 h-8 bg-error/10 text-error rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-primary">{item.task}</div>
                    <div className="text-sm text-text-secondary">{item.time} • {item.difficulty}</div>
                  </div>
                  <Icon name="Clock" size={16} className="text-error" />
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-error/10 rounded-lg text-center">
              <div className="text-error font-bold text-lg">Total: 13-19 Hours</div>
              <div className="text-error text-sm">Plus months to learn skills</div>
            </div>
          </div>

          {/* AI Way */}
          <div className="bg-success/5 rounded-2xl p-8 border border-success/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Icon name="Zap" size={16} />
                <span>AI Automation</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2 font-playfair">
                The AI-Powered Way
              </h3>
              <p className="text-text-secondary">
                12 minutes total, zero skills required
              </p>
            </div>

            <div className="space-y-4">
              {aiSteps.map((item) => (
                <div key={item.step} className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-success/20">
                  <div className="w-8 h-8 bg-success/10 text-success rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-primary">{item.task}</div>
                    <div className="text-sm text-text-secondary">{item.time} • {item.difficulty}</div>
                  </div>
                  <Icon name="CheckCircle" size={16} className="text-success" />
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-success/10 rounded-lg text-center">
              <div className="text-success font-bold text-lg">Total: 12 Minutes</div>
              <div className="text-success text-sm">Ready to upload immediately</div>
            </div>
          </div>
        </div>

        {/* Live Demo */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-accent/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4 font-playfair">
              Live AI Demo: {niches.find(n => n.id === activeDemo)?.name}
            </h3>
            <Button
              variant="default"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={handleGenerateDemo}
              loading={isGenerating}
              iconName="Play"
              iconPosition="left"
            >
              {isGenerating ? 'AI is Creating...' : 'Generate Video Now'}
            </Button>
          </div>

          {activeDemo && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Generated Content */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 card-shadow">
                  <h4 className="font-bold text-primary mb-3 flex items-center">
                    <Icon name="FileText" size={20} className="mr-2 text-emerald-600" />
                    AI-Generated Script
                  </h4>
                  <div className="bg-muted rounded-lg p-4">
                    <h5 className="font-semibold text-primary mb-2">
                      {demoContent[activeDemo].title}
                    </h5>
                    <p className="text-text-secondary text-sm whitespace-pre-line">
                      {demoContent[activeDemo].script}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 card-shadow">
                  <h4 className="font-bold text-primary mb-3 flex items-center">
                    <Icon name="Mic" size={20} className="mr-2 text-emerald-600" />
                    AI Voiceover
                  </h4>
                  <div className="bg-muted rounded-lg p-4 flex items-center space-x-3">
                    <Icon name="Volume2" size={20} className="text-emerald-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-primary">
                        {demoContent[activeDemo].voiceover}
                      </div>
                      <div className="text-xs text-text-secondary">
                        High-quality, natural-sounding voice
                      </div>
                    </div>
                    <Button variant="outline" size="sm" iconName="Play">
                      Preview
                    </Button>
                  </div>
                </div>
              </div>

              {/* Generated Thumbnail & Stats */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 card-shadow">
                  <h4 className="font-bold text-primary mb-3 flex items-center">
                    <Icon name="Image" size={20} className="mr-2 text-emerald-600" />
                    AI-Generated Thumbnail
                  </h4>
                  <div className="relative">
                    <Image
                      src={demoContent[activeDemo].thumbnail}
                      alt={demoContent[activeDemo].title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                      <div className="bg-white/90 px-3 py-1 rounded text-sm font-bold text-primary">
                        {demoContent[activeDemo].title}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 card-shadow">
                  <h4 className="font-bold text-primary mb-3 flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2 text-emerald-600" />
                    Projected Performance
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">
                        {demoContent[activeDemo].stats.views}
                      </div>
                      <div className="text-xs text-text-secondary">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">
                        {demoContent[activeDemo].stats.engagement}
                      </div>
                      <div className="text-xs text-text-secondary">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {demoContent[activeDemo].stats.revenue}
                      </div>
                      <div className="text-xs text-text-secondary">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-primary mb-4 font-playfair">
            Ready to Let AI Build Your YouTube Empire?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Join 12,000+ students who've already automated their way to six-figure YouTube channels.
          </p>
          <Button
            variant="default"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-4"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => navigate('/checkout')}
          >
            Get AI Automation System - ₹999
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIShowcaseSection;
