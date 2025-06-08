
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center animated-bg overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
            RobloxPro
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Premium Roblox Enhancement Tool
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the ultimate gaming advantage with advanced aimbot, silent aim, 
            and precision controls designed for competitive players.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="pink-glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold text-lg px-8 py-6"
            >
              Download Now - $29.99
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6"
            >
              View Features
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
