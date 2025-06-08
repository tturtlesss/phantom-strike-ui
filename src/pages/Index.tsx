
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import InterfacePreview from '@/components/InterfacePreview';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <InterfacePreview />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
