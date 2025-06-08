import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Settings, Circle, SlidersHorizontal } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: "Advanced Aimbot",
    description: "Precision targeting with customizable smoothing and prediction algorithms for enhanced accuracy.",
    details: ["Customizable FOV", "Smoothing Controls", "Prediction System", "Multiple Hit Parts"]
  },
  {
    icon: Circle,
    title: "Silent Aim",
    description: "Invisible targeting system that maintains natural appearance while ensuring perfect accuracy.",
    details: ["Undetectable", "Instant Lock", "Range Control", "Smart Targeting"]
  },
  {
    icon: Settings,
    title: "Hit Part Selection",
    description: "Choose specific body parts for targeting with precision control and customization options.",
    details: ["Head Targeting", "Body Targeting", "Closest Part", "Custom Priority"]
  },
  {
    icon: SlidersHorizontal,
    title: "FOV Customization",
    description: "Adjustable field of view settings for optimal targeting range and performance.",
    details: ["Dynamic Range", "Visual Indicators", "Size Control", "Shape Options"]
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Premium Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced gaming enhancements designed for competitive players who demand the best performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card pink-glow-hover transition-all duration-300 hover:scale-105 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 pink-glow">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-gradient">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  {feature.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-center text-sm text-foreground/80">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 pulse-glow" />
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
