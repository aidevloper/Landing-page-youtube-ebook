import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ChapterPreview = () => {
  const navigate = useNavigate();
  const chapters = [
    {
      id: 1,
      title: "How to Build & Monetize a YouTube Automation Channel in 30 Days",
      chapters: "Chapters 1 & 2",
      description: "This section covers everything from setting up your automated YouTube system to understanding key monetization strategies. By the end of these chapters, you'll be able to launch and profit from your YouTube channel with minimal effort.",
      icon: "Rocket",
      color: "emerald",
      keyTakeaways: [
        "Set up automated YouTube system in under 30 minutes",
        "Understand key monetization strategies",
        "Launch and profit from your channel with minimal effort",
        "Master the foundation of YouTube automation"
      ]
    },
    {
      id: 2,
      title: "How to Go Viral with the 2025 YouTube Algorithm",
      chapters: "Chapters 3 to 16",
      description: "Understand the latest YouTube algorithm changes and learn how to craft videos that go viral. These chapters provide deep insights into ranking factors, video optimization, and maximizing reach on YouTube.",
      icon: "TrendingUp",
      color: "success",
      keyTakeaways: [
        "Master the 2025 YouTube algorithm changes",
        "Craft videos that consistently go viral",
        "Optimize for maximum reach and visibility",
        "Understand ranking factors and SEO strategies"
      ]
    },
    {
      id: 3,
      title: "The Best Free & Paid AI Tools to Automate Your Channel",
      chapters: "Chapters 4, 5 & 7",
      description: "Discover the AI tools that will help you automate content creation, editing, and optimization. We guide you through selecting the right tools for beginners and advanced users alike.",
      icon: "Zap",
      color: "warning",
      keyTakeaways: [
        "Discover the best AI tools for content creation",
        "Automate editing and optimization processes",
        "Select tools for beginners and advanced users",
        "Build a complete automation toolkit"
      ]
    },
    {
      id: 4,
      title: "High-Profit Niches & AI-Generated Content That Actually Works",
      chapters: "Chapters 6, 8 & 9",
      description: "Learn which niches on YouTube are the most profitable and how AI can generate high-quality content to meet market demands. These chapters dive into niche research and content creation strategies.",
      icon: "Target",
      color: "primary",
      keyTakeaways: [
        "Identify the most profitable YouTube niches",
        "Generate high-quality AI content that converts",
        "Research market demands and trends",
        "Create content strategies that drive results"
      ]
    },
    {
      id: 5,
      title: "3 Passive Income Streams with YouTube Automation",
      chapters: "Chapters 10, 12 & 13",
      description: "Turn your YouTube automation system into a cash machine by diversifying your income sources. This section outlines three proven strategies to generate passive income using your channel.",
      icon: "DollarSign",
      color: "purple",
      keyTakeaways: [
        "Diversify income with multiple revenue streams",
        "Implement proven passive income strategies",
        "Turn automation into a cash machine",
        "Build sustainable long-term income"
      ]
    },
    {
      id: 6,
      title: "Content Schedules That Scale Your Channel to $100K+",
      chapters: "Chapters 11 & 14",
      description: "Master the art of content scheduling to grow your YouTube channel exponentially. Learn how to scale consistently and keep your audience engaged while maximizing revenue.",
      icon: "Calendar",
      color: "success",
      keyTakeaways: [
        "Create content schedules that scale exponentially",
        "Keep audience engaged consistently",
        "Maximize revenue through strategic scheduling",
        "Scale to $100K+ revenue systematically"
      ]
    },
    {
      id: 7,
      title: "The Most Common Mistakes That Kill New YouTube Channels",
      chapters: "Chapter 17",
      description: "Avoid the rookie mistakes that most new YouTubers make. In this chapter, we'll show you the pitfalls to avoid and how to keep your channel growing steadily.",
      icon: "AlertTriangle",
      color: "warning",
      keyTakeaways: [
        "Avoid common rookie mistakes",
        "Identify pitfalls that kill channels",
        "Maintain steady growth patterns",
        "Learn from others' failures"
      ]
    },
    {
      id: 8,
      title: "Build a Team & Future-Proof Your YouTube Business",
      chapters: "Chapters 18, 20 & 21",
      description: "Learn how to build a team to help manage your growing YouTube business. These chapters will guide you through hiring, automating, and expanding your business to ensure long-term success.",
      icon: "Users",
      color: "primary",
      keyTakeaways: [
        "Build and manage a professional team",
        "Automate and expand your business",
        "Ensure long-term success and growth",
        "Future-proof your YouTube empire"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        icon: 'text-emerald-600',
        hover: 'hover:border-emerald-400 hover:bg-emerald-100'
      },
      success: {
        bg: 'bg-success/10',
        border: 'border-success/20',
        icon: 'text-success',
        hover: 'hover:border-success/40 hover:bg-success/15'
      },
      warning: {
        bg: 'bg-warning/10',
        border: 'border-warning/20',
        icon: 'text-warning',
        hover: 'hover:border-warning/40 hover:bg-warning/15'
      },
      primary: {
        bg: 'bg-primary/10',
        border: 'border-primary/20',
        icon: 'text-primary',
        hover: 'hover:border-primary/40 hover:bg-primary/15'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        hover: 'hover:border-purple-400 hover:bg-purple-100'
      }
    };
    return colorMap[color] || colorMap.emerald;
  };

  return (
    <section id="course-preview" className="section-padding bg-gradient-to-br from-background to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Complete Ebook{' '}
            <span className="text-emerald-600">Chapter Breakdown</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Get a detailed preview of every chapter in our comprehensive YouTube automation ebook. 
            Each chapter is designed to take you from complete beginner to YouTube automation expert.
          </p>
        </div>

        {/* Ebook Stats */}
        <div className="grid sm:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 text-center">
            <Icon name="BookOpen" size={32} className="text-emerald-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary">21</div>
            <div className="text-text-secondary text-sm">Comprehensive Chapters</div>
          </div>
          <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-6 text-center">
            <Icon name="Clock" size={32} className="text-success mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary">300+</div>
            <div className="text-text-secondary text-sm">Pages of Content</div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
            <Icon name="Target" size={32} className="text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary">8</div>
            <div className="text-text-secondary text-sm">Core Learning Modules</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <Icon name="Award" size={32} className="text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-text-secondary text-sm">Actionable Strategies</div>
          </div>
        </div>

        {/* Chapter Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {chapters.map((chapter, index) => {
            const colors = getColorClasses(chapter.color);
            return (
              <div
                key={chapter.id}
                className={`premium-card border-2 ${colors.bg} ${colors.border} ${colors.hover} group cursor-pointer transition-all duration-500 ease-in-out`}
              >
                {/* Chapter Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={chapter.icon} size={24} className={colors.icon} />
                  </div>
                  <span className="text-xs font-semibold text-text-secondary bg-white/80 px-2 py-1 rounded-full">
                    {chapter.chapters}
                    </span>
                </div>

                {/* Chapter Title */}
                <h3 className="text-xl font-bold text-primary mb-3 font-playfair leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                  {chapter.title}
                </h3>

                {/* Chapter Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {chapter.description}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Takeaways:</h4>
                  {chapter.keyTakeaways.slice(0, 3).map((takeaway, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-text-secondary leading-relaxed">{takeaway}</span>
                      </div>
                    ))}
                  {chapter.keyTakeaways.length > 3 && (
                    <div className="text-xs text-emerald-600 font-medium">
                      +{chapter.keyTakeaways.length - 3} more insights
                  </div>
                  )}
                </div>

                {/* Learn More Button */}
                        <Button
                          variant="outline"
                          size="sm"
                  className={`w-full border-2 ${colors.border} hover:${colors.bg} transition-all duration-300 group-hover:scale-105`}
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => navigate('/checkout')}
                  >
                  Learn More
                  </Button>
              </div>
            );
          })}
        </div>

        {/* Chapter Preview CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <Icon name="BookOpen" size={48} className="text-emerald-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 font-playfair">
            Ready to Master YouTube Automation?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get instant access to all 21 chapters and start building your six-figure YouTube empire today. 
            Join 12,000+ students who've already transformed their lives with our proven system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => navigate('/checkout')}
            >
              Get My Ebook Now - ₹999
            </Button>
            <div className="text-emerald-300 text-sm font-medium">
              ✓ 30-Day Money-Back Guarantee
            </div>
          </div>
        </div>

        {/* Ebook Guarantee */}
        <div className="mt-16 bg-gradient-to-r from-success/10 to-emerald-50 rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Shield" size={24} className="text-success" />
              <div className="text-left">
                <div className="font-semibold text-primary">30-Day Guarantee</div>
                <div className="text-sm text-text-secondary">Full refund if not satisfied</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Users" size={24} className="text-emerald-600" />
              <div className="text-left">
                <div className="font-semibold text-primary">12,000+ Students</div>
                <div className="text-sm text-text-secondary">Already transformed their lives</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Award" size={24} className="text-purple-600" />
              <div className="text-left">
                <div className="font-semibold text-primary">94.7% Success Rate</div>
                <div className="text-sm text-text-secondary">Proven results guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterPreview;
