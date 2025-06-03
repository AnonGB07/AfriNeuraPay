
import { ArrowDown, Zap, CreditCard, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium">AI-Powered Financial Revolution</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-600 bg-clip-text text-transparent">
              NeuraPay
            </span>
            <br />
            <span className="text-foreground">Smart Money, Smart Life</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Experience the future of digital payments with AI-driven insights, premium cards, 
            and exclusive membership tiers. Join the financial revolution across Africa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/services">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity">
                <CreditCard className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
            </Link>
            <Link to="/membership">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Star className="mr-2 h-5 w-5" />
                Explore Membership
              </Button>
            </Link>
          </div>

          {/* Premium Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center glass-card p-4 rounded-2xl">
              <div className="text-2xl md:text-3xl font-bold text-purple-500">$2.5M+</div>
              <div className="text-sm text-foreground/60">Processing Volume</div>
            </div>
            <div className="text-center glass-card p-4 rounded-2xl">
              <div className="text-2xl md:text-3xl font-bold text-green-500">500K+</div>
              <div className="text-sm text-foreground/60">Verified Users</div>
            </div>
            <div className="text-center glass-card p-4 rounded-2xl">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">35+</div>
              <div className="text-sm text-foreground/60">Countries</div>
            </div>
            <div className="text-center glass-card p-4 rounded-2xl">
              <div className="text-2xl md:text-3xl font-bold text-orange-500">24/7</div>
              <div className="text-sm text-foreground/60">AI Support</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-foreground/60">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Bank-Grade Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>AI-Powered Insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Premium Experience</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
