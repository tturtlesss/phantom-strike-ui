
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card backdrop-blur-xl' : ''
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            RobloxPro
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#preview" className="text-foreground/80 hover:text-primary transition-colors">
              Preview
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#support" className="text-foreground/80 hover:text-primary transition-colors">
              Support
            </a>
          </nav>

          <Button className="pink-glow-hover bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Download Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
