
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const screenshots = [
  {
    title: "Main Interface",
    description: "Clean, intuitive control panel with all features accessible",
    image: "/lovable-uploads/2e2924fb-4b98-4fc3-8670-1891419bbee2.png"
  },
  {
    title: "Aimbot Settings",
    description: "Advanced configuration options for precision targeting",
    image: "/lovable-uploads/2e2924fb-4b98-4fc3-8670-1891419bbee2.png"
  },
  {
    title: "Visual Settings",
    description: "Customize FOV, smoothing, and visual indicators",
    image: "/lovable-uploads/2e2924fb-4b98-4fc3-8670-1891419bbee2.png"
  }
];

const InterfacePreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="preview" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Interface Preview
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our sleek, user-friendly interface designed for both beginners and professionals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="glass-card overflow-hidden pink-glow">
            <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-background to-secondary">
              <img 
                src={screenshots[activeIndex].image}
                alt={screenshots[activeIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-2">
                {screenshots[activeIndex].title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {screenshots[activeIndex].description}
              </p>
              
              <div className="flex justify-center space-x-4">
                {screenshots.map((_, index) => (
                  <Button
                    key={index}
                    variant={activeIndex === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-primary text-primary-foreground pink-glow' 
                        : 'border-primary/30 text-primary hover:bg-primary/10'
                    }`}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InterfacePreview;
