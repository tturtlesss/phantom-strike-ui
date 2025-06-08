
const Footer = () => {
  return (
    <footer id="support" className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/419f8128-6973-4851-8401-9f758250d2d5.png" 
                alt="Matcha Logo" 
                className="w-8 h-8"
              />
              <h3 className="text-2xl font-bold text-gradient font-fe5cent">Matcha</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The most advanced Roblox external tool trusted by thousands of competitive players worldwide. 
              Experience the ultimate gaming advantage with our premium features.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://discord.gg/matcha" 
                className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg transition-colors pink-glow-hover font-fe5cent"
              >
                Join Discord
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-fe5cent">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#preview" className="text-muted-foreground hover:text-primary transition-colors">Preview</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-fe5cent">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Installation Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Troubleshooting</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Matcha. All rights reserved. | 
            <a href="#" className="text-primary hover:underline ml-1">Privacy Policy</a> | 
            <a href="#" className="text-primary hover:underline ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
