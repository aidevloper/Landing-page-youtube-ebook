import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AIShowcaseSection from './components/AIShowcaseSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ChapterPreview from './components/CoursePreview';
import IncomeCalculator from './components/IncomeCalculator';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';

const LandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'YouTube Automation Ebook - Build Your Six-Figure Faceless YouTube Empire in 30 Days';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join 12,000+ students who\'ve built six-figure YouTube channels using AI automation. No camera, no editing, no technical skills required. 30-day guarantee.');
    }

    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Above the fold conversion focus */}
      <HeroSection />
      
      {/* Problem Agitation - Address pain points */}
      <ProblemSection />
      
      {/* AI Solution Showcase - Demonstrate the solution */}
      <AIShowcaseSection />
      
      {/* Benefits Section - Feature highlights with hover interactions */}
      <BenefitsSection />
      
      {/* Social Proof - Success stories and testimonials */}
      <TestimonialsSection />
      
      {/* Course Preview - Curriculum and content overview */}
      <ChapterPreview />
      
      {/* Income Calculator - Interactive engagement tool */}
      <IncomeCalculator />
      
      {/* Pricing Section - Main conversion point */}
      <PricingSection />
      
      {/* FAQ Section - Objection handling */}
      <FAQSection />
      
      {/* Final CTA - Last chance conversion */}
      <FinalCTA />
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 font-playfair">YouTube Automation</h3>
              <p className="text-white/80 text-sm">
                The complete AI-powered system for building six-figure faceless YouTube channels.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#course-preview" className="hover:text-emerald-400 transition-colors">Course Preview</a></li>
                <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} YouTube Automation Ebook. All rights reserved.
            </p>
            <p className="text-white/60 text-xs mt-2">
              Results may vary. Success depends on individual effort and market conditions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;