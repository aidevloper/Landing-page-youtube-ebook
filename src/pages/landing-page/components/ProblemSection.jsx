import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProblemSection = () => {
  const navigate = useNavigate();
  const [selectedProblem, setSelectedProblem] = useState('time');

  const problems = [
    {
      id: 'time',
      title: 'No Time for Content Creation',
      icon: 'Clock',
      stat: '40+ Hours Weekly',
      description: 'Traditional YouTube requires endless hours of planning, filming, editing, and uploading.',
      painPoints: [
        'Spending entire weekends editing videos',
        'Struggling to maintain consistent upload schedule',
        'Burnout from content creation pressure',
        'Missing family time for YouTube work'
      ]
    },
    {
      id: 'technical',
      title: 'Technical Skills Barrier',
      icon: 'Settings',
      stat: '73% Quit in 90 Days',
      description: 'Complex editing software, SEO optimization, and technical setup overwhelm beginners.',
      painPoints: [
        'Learning expensive editing software',
        'Understanding YouTube algorithm changes',
        'Technical setup and equipment costs',
        'Thumbnail design and SEO optimization'
      ]
    },
    {
      id: 'camera',
      title: 'Camera Shyness & Privacy',
      icon: 'EyeOff',
      stat: '67% Fear Being On Camera',
      description: 'Many aspiring creators avoid YouTube due to privacy concerns and camera anxiety.',
      painPoints: [
        'Fear of judgment and criticism',
        'Privacy concerns about showing face',
        'Lack of confidence on camera',
        'Professional appearance pressure'
      ]
    }
  ];

  const statistics = [
    {
      number: '73%',
      label: 'Quit Within 90 Days',
      icon: 'TrendingDown',
      color: 'text-error'
    },
    {
      number: '6 Months',
      label: 'Average Time to Monetize',
      icon: 'Calendar',
      color: 'text-warning'
    },
    {
      number: '40+ Hours',
      label: 'Weekly Time Investment',
      icon: 'Clock',
      color: 'text-error'
    },
    {
      number: '₹50,000+',
      label: 'Equipment & Software Costs',
      icon: 'CreditCard',
      color: 'text-warning'
    }
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Why 73% of YouTubers{' '}
            <span className="text-error">Fail & Quit</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Traditional YouTube creation is broken. Here's why most people never 
            make it past their first 90 days, and how AI automation solves every problem.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center card-shadow hover:shadow-lg transition-shadow">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4`}>
                <Icon name={stat.icon} size={24} className={stat.color} />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-text-secondary text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Problem Selector */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary text-center mb-8 font-playfair">
            What's Your Biggest YouTube Challenge?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {problems.map((problem) => (
              <button
                key={problem.id}
                onClick={() => setSelectedProblem(problem.id)}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                  selectedProblem === problem.id
                    ? 'border-emerald-200 bg-emerald-50 shadow-lg'
                    : 'border-border bg-white hover:border-emerald-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    selectedProblem === problem.id ? 'bg-emerald-600 text-white' : 'bg-muted'
                  }`}>
                    <Icon name={problem.icon} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{problem.title}</h4>
                    <div className="text-sm text-error font-medium">{problem.stat}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Problem Details */}
          <div className="bg-white rounded-2xl p-8 card-shadow">
            {problems.map((problem) => (
              selectedProblem === problem.id && (
                <div key={problem.id} className="animation-fade-in">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 bg-error/10 rounded-lg">
                          <Icon name={problem.icon} size={24} className="text-error" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-primary">{problem.title}</h4>
                          <div className="text-error font-semibold">{problem.stat}</div>
                        </div>
                      </div>
                      
                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {problem.description}
                      </p>

                      <div className="space-y-3">
                        <h5 className="font-semibold text-primary">Common Pain Points:</h5>
                        {problem.painPoints.map((point, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Icon name="AlertCircle" size={16} className="text-error mt-1 flex-shrink-0" />
                            <span className="text-text-secondary text-sm">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-error/10 to-warning/10 rounded-xl p-8 text-center">
                        <Icon name="TrendingDown" size={48} className="text-error mx-auto mb-4" />
                        <h5 className="text-lg font-bold text-primary mb-2">
                          The Traditional Way is Broken
                        </h5>
                        <p className="text-text-secondary text-sm mb-4">
                          Most creators spend months learning skills that AI can do in minutes.
                        </p>
                        <div className="bg-white rounded-lg p-4 border-l-4 border-error">
                          <div className="text-2xl font-bold text-error">{problem.stat}</div>
                          <div className="text-xs text-text-secondary">of creators struggle with this</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Solution Teaser */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
          <Icon name="Lightbulb" size={48} className="text-emerald-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 font-playfair">
            What if AI Could Solve All These Problems?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our AI automation system eliminates every single barrier that stops creators from succeeding. 
            No technical skills, no camera time, no editing - just results.
          </p>
          <Button
            variant="default"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            iconName="ArrowDown"
            iconPosition="right"
            onClick={() => navigate('/checkout')}
          >
            See How AI Solves Everything
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
