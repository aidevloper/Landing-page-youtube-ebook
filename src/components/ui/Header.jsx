import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigationSections = [
    { 
      id: 'course-preview', 
      label: 'Course Preview', 
      offset: 80,
      tooltip: 'See AI automation in action'
    },
    { 
      id: 'success-stories', 
      label: 'Success Stories', 
      offset: 80,
      tooltip: 'Real student results'
    },
    { 
      id: 'pricing', 
      label: 'Pricing', 
      offset: 80,
      tooltip: 'Course packages & guarantee'
    },
    { 
      id: 'faq', 
      label: 'FAQ', 
      offset: 80,
      tooltip: 'Common questions answered'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = navigationSections.map(section => ({
        ...section,
        element: document.getElementById(section.id)
      })).filter(section => section.element);

      const currentSection = sections.find(section => {
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId, offset = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-[1000]">
        <div className="container-max">
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Play" size={20} color="white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary font-playfair">
                  YouTube Automation
                </h1>
                <p className="text-xs text-text-secondary font-medium">
                  AI-Powered Ebook
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id, section.offset)}
                  className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                  title={section.tooltip}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="default"
                className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => navigate('/checkout')}
              >
                Start My YouTube Empire
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
          <div 
            className="progress-bar"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-primary font-playfair">
              Navigation
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <nav className="space-y-4">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id, section.offset)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  activeSection === section.id 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :'hover:bg-muted text-text-secondary'
                }`}
              >
                <div className="font-medium">{section.label}</div>
                <div className="text-sm text-text-secondary mt-1">
                  {section.tooltip}
                </div>
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-border">
            <Button
              variant="default"
              fullWidth
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => navigate('/checkout')}
            >
              Start My YouTube Empire
            </Button>
          </div>
        </div>
      </div>

      {/* Quick CTA Button */}
      <div className="floating-cta hidden lg:block">
        <Button
          variant="default"
          className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-cta hover:shadow-cta-hover rounded-full px-6 py-3 animation-scale-hover"
          onClick={() => navigate('/checkout')}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Get Started
        </Button>
      </div>

      {/* Mobile Quick CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-[900]">
        <Button
          variant="default"
          fullWidth
          className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-cta"
          onClick={() => navigate('/checkout')}
        >
          Start My YouTube Empire
        </Button>
      </div>
    </>
  );
};

export default Header;
