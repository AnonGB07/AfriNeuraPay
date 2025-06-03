
import { 
  Phone, 
  Wifi, 
  Zap, 
  Tv, 
  ArrowUp, 
  Monitor,
  Calendar,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Phone,
    title: 'Airtime & Data',
    description: 'Top up your phone with airtime and data bundles from all major networks',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    popular: true
  },
  {
    icon: Zap,
    title: 'Electricity Bills',
    description: 'Pay your electricity bills instantly across all African utility companies',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: ArrowUp,
    title: 'Water Bills',
    description: 'Quick and easy water bill payments for municipal and private providers',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: Tv,
    title: 'TV Subscriptions',
    description: 'Renew DStv, GOtv, StarTimes and other TV subscriptions effortlessly',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: Calendar,
    title: 'Flight Booking',
    description: 'Book domestic and international flights with competitive prices',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Access affordable insurance plans for health, auto, and property',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: Monitor,
    title: 'Internet Bills',
    description: 'Pay for fiber, broadband, and satellite internet services',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10'
  },
  {
    icon: Wifi,
    title: 'Digital Services',
    description: 'Netflix, Spotify, gaming subscriptions, and other digital platforms',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10'
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Complete Utility Solutions
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Everything you need to manage your daily utilities and services across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="service-card relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="mb-6 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
