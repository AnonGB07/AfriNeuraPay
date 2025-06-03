
import { Check, Clock, Shield, Zap, Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Lightning-fast transactions completed in seconds',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: '256-bit encryption and fraud protection',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Service available round the clock, every day',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: Heart,
    title: 'Local Support',
    description: 'Customer service in your local language',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: Star,
    title: 'Best Rates',
    description: 'Competitive pricing with no hidden fees',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: Check,
    title: 'Reliable Network',
    description: '99.9% uptime with redundant systems',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10'
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              AfriQ Utility Hub?
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Built for Africa, by Africans. Experience the difference with our cutting-edge platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="service-card group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-2xl font-bold text-green-500 mb-2">99.9%</div>
              <div className="text-sm text-foreground/60">Uptime</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-2xl font-bold text-blue-500 mb-2">&lt;2s</div>
              <div className="text-sm text-foreground/60">Response Time</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-2xl font-bold text-orange-500 mb-2">1M+</div>
              <div className="text-sm text-foreground/60">Transactions</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-2xl font-bold text-purple-500 mb-2">50+</div>
              <div className="text-sm text-foreground/60">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
