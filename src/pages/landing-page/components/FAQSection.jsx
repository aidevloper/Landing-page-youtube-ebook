import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FAQSection = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "I have zero YouTube experience. Can I really succeed with this?",
      answer: `Absolutely! Our system is specifically designed for complete beginners. You don't need any prior YouTube experience, technical skills, or even basic computer knowledge beyond browsing the internet.\n\nOur AI handles all the complex parts:\n• Script writing and research\n• Video creation and editing\n• Thumbnail design and optimization\n• SEO and keyword optimization\n• Upload scheduling and management\n\nOver 78% of our successful students had never created a single YouTube video before joining. The system is so simple that if you can send an email, you can build a six-figure YouTube channel.`,
      category: "beginner",
      videoDemo: true
    },
    {
      id: 1,
      question: "How much time do I need to invest daily?",
      answer: `This is the beauty of AI automation - you only need 15-30 minutes per day once everything is set up.\n\nHere's the typical daily routine:\n• 5 minutes: Choose your video topic from AI suggestions\n• 10 minutes: Review and approve AI-generated content\n• 5 minutes: Schedule upload and monitor performance\n• 10 minutes: Engage with comments (optional but recommended)\n\nDuring the initial setup (first 7 days), you'll spend about 1-2 hours daily learning the system. After that, it's mostly hands-off. Many students manage multiple channels with just 1 hour daily total.`,
      category: "time",
      videoDemo: false
    },
    {
      id: 2,
      question: "What if I'm camera shy or don't want to show my face?",
      answer: `Perfect! Our entire system is built for faceless YouTube channels. You never need to appear on camera, record your own voice, or show any part of yourself.\n\nThe AI creates everything:\n• Professional voiceovers in multiple languages and accents\n• Engaging visual content using stock footage and animations\n• Eye-catching thumbnails without personal photos\n• Complete videos that look professionally produced\n\nSome of our most successful students are introverts who would never consider traditional YouTube. The faceless approach actually has advantages - you can create content about any topic without being pigeonholed as a personality.`,
      category: "privacy",
      videoDemo: true
    },
    {
      id: 3,
      question: "How quickly can I start making money?",
      answer: `Most students see their first income within 30-45 days, with significant earnings by month 3.\n\nTypical timeline:\n• Week 1-2: Channel setup and first videos published\n• Week 3-4: YouTube monetization approval (1,000 subscribers + 4,000 watch hours)\n• Month 2: First ₹25,000-₹50,000 in revenue\n• Month 3: ₹1,00,000-₹3,00,000 monthly income\n• Month 6+: ₹4,00,000+ monthly income\n\nThe key is consistency. Students who upload 3-5 videos weekly see faster results. Our record holder made ₹2,50,000 in their first month, but that's exceptional. We guarantee you'll make your first ₹1,00,000 within 60 days or get a full refund plus ₹10,000 for your time.`,
      category: "income",
      videoDemo: false
    },
    {
      id: 4,
      question: "What niches work best with this system?",
      answer: `Our AI system works exceptionally well with these high-profit niches:\n\n**Top Performing Niches:**\n• Personal Finance & Investing (₹5-8 per 1000 views)\n• Health & Wellness (₹4-6 per 1000 views)\n• Technology Reviews & Tutorials (₹6-10 per 1000 views)\n• Business & Entrepreneurship (₹7-12 per 1000 views)\n• Self-Improvement & Productivity (₹3-5 per 1000 views)\n\n**Why These Work:**\n• High advertiser demand = higher CPM rates\n• Evergreen content that stays relevant\n• Multiple monetization opportunities beyond ads\n• AI excels at research-based, informational content\n\nWe provide niche-specific templates and strategies for each category. The system analyzes trending topics in your chosen niche and creates content that's virtually guaranteed to get views.`,
      category: "niche",
      videoDemo: true
    },
    {
      id: 5,
      question: "Is this just another get-rich-quick scheme?",
      answer: `No, this is a legitimate business system based on proven AI technology and YouTube's established monetization platform.\n\n**Why This Is Different:**\n• Built on YouTube's official partner program\n• Uses cutting-edge AI tools (not outdated methods)\n• Requires consistent work (15-30 min daily)\n• Based on real student results, not fake testimonials\n• Backed by 30-day money-back guarantee\n\n**What Makes It Work:**\n• YouTube pays creators billions annually\n• AI eliminates the skill barriers that stop most people\n• Faceless content scales without personal time investment\n• Multiple revenue streams beyond just ad revenue\n\nThis isn't about overnight riches - it's about building a real, sustainable online business using AI to automate the hard parts. Our students treat this as a serious business opportunity, not a lottery ticket.`,
      category: "legitimacy",
      videoDemo: false
    },
    {
      id: 6,
      question: "What if YouTube changes its algorithm or policies?",
      answer: `Great question! Algorithm changes are actually why AI automation is so powerful.\n\n**Our Advantage:**\n• AI analyzes algorithm changes in real-time\n• Automatically adjusts content strategy\n• Diversified across multiple revenue streams\n• Built-in adaptability to platform changes\n\n**Protection Strategies:**\n• Multi-platform distribution (YouTube, Facebook, Instagram)\n• Email list building for direct audience access\n• Multiple monetization methods (ads, affiliates, products)\n• Continuous system updates included in your membership\n\n**Historical Performance:**\n• Our system has adapted through 12+ major YouTube updates\n• Student success rates actually improved during recent algorithm changes\n• AI-created content often performs better than human-created content\n\nWe also provide lifetime updates to ensure your system stays current with any platform changes. Your investment is protected.`,
      category: "platform",
      videoDemo: false
    },
    {
      id: 7,
      question: "Do I need to buy expensive equipment or software?",
      answer: `No additional purchases required! Everything is included in your course investment.\n\n**What's Included:**\n• Lifetime access to all AI tools (₹25,000 value)\n• Professional video editing software access\n• Stock footage and music library\n• Thumbnail creation tools\n• SEO and keyword research tools\n• Analytics and optimization software\n\n**All You Need:**\n• Computer or laptop with internet connection\n• Basic web browser (Chrome, Firefox, Safari)\n• That's it!\n\n**No Need For:**\n• Expensive cameras or microphones\n• Professional editing software subscriptions\n• Stock footage memberships\n• Graphic design tools\n• SEO software subscriptions\n\nWe've negotiated bulk licensing deals to provide everything at no extra cost. Many students are shocked at how much money they save compared to traditional YouTube creation methods.`,
      category: "costs",
      videoDemo: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', count: faqs.length },
    { id: 'beginner', label: 'Beginner Friendly', count: faqs.filter(f => f.category === 'beginner').length },
    { id: 'income', label: 'Income & Results', count: faqs.filter(f => f.category === 'income').length },
    { id: 'time', label: 'Time Investment', count: faqs.filter(f => f.category === 'time').length },
    { id: 'legitimacy', label: 'Legitimacy', count: faqs.filter(f => f.category === 'legitimacy').length }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? -1 : id);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Your Questions,{' '}
            <span className="text-accent">Answered</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We've helped over 12,000 students succeed. Here are the most common questions 
            and detailed answers to help you make an informed decision.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-muted text-text-secondary hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              <span className="font-medium">{category.label}</span>
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-surface rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary pr-4">
                      {faq.question}
                    </h3>
                    {faq.videoDemo && (
                      <div className="flex items-center space-x-2 mt-2">
                        <Icon name="Play" size={14} className="text-emerald-600" />
                        <span className="text-emerald-600 text-sm font-medium">Video explanation available</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <Icon 
                      name={openFAQ === faq.id ? "ChevronUp" : "ChevronDown"} 
                      size={24} 
                      className="text-text-secondary" 
                    />
                  </div>
                </button>

                {openFAQ === faq.id && (
                  <div className="px-6 pb-6 animation-fade-in">
                    <div className="border-t border-border pt-6">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                      
                      {faq.videoDemo && (
                        <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Icon name="Play" size={20} className="text-emerald-600" />
                              <div>
                                <div className="font-medium text-primary">
                                  Watch Detailed Video Explanation
                                </div>
                                <div className="text-text-secondary text-sm">
                                  See this concept demonstrated step-by-step
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                              iconName="ExternalLink"
                              iconPosition="right"
                            >
                              Watch Now
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
          <Icon name="MessageCircle" size={48} className="text-emerald-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 font-playfair">
            Still Have Questions?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our success team is here to help! Get personalized answers to your specific 
            situation and learn how our system can work for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              className="bg-emerald-600 hover:bg-emerald-600/90 text-white"
              iconName="Phone"
              iconPosition="left"
              onClick={() => navigate('/checkout')}
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              iconName="MessageSquare"
              iconPosition="left"
              onClick={() => navigate('/checkout')}
            >
              Live Chat Support
            </Button>
          </div>
          
          <div className="mt-6 text-white/70 text-sm">
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={14} />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={14} />
                <span>12,000+ Happy Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={14} />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
