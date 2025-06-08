
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$19.99",
    period: "lifetime",
    description: "Perfect for casual gaming",
    features: [
      "Basic Aimbot",
      "FOV Adjustment",
      "Hit Part Selection",
      "24/7 Support",
      "Regular Updates"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$29.99",
    period: "lifetime",
    description: "Our most popular choice",
    features: [
      "Advanced Aimbot",
      "Silent Aim",
      "Prediction System",
      "Smoothing Controls",
      "FOV Customization",
      "Priority Support",
      "Beta Access"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "$49.99",
    period: "lifetime",
    description: "For competitive players",
    features: [
      "All Pro Features",
      "Custom Configurations",
      "Advanced Visuals",
      "VIP Discord Access",
      "Private Builds",
      "1-on-1 Setup Help",
      "Lifetime Updates"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Simple Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your gaming needs. All plans include lifetime access and updates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`glass-card transition-all duration-300 hover:scale-105 animate-slide-in-left relative ${
                plan.popular ? 'pink-glow ring-2 ring-primary/50' : 'pink-glow-hover'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold pink-glow">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gradient mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CircleCheck className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-semibold text-lg py-6 transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground pink-glow' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground border border-primary/30 hover:border-primary/60'
                  }`}
                >
                  Get {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
