
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Phone, 
  Wifi, 
  Zap, 
  Tv, 
  ArrowUp, 
  Monitor,
  Calendar,
  Shield,
  Gamepad2,
  CreditCard,
  Car,
  Home
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Phone,
    title: 'Airtime & Data',
    description: 'Instant top-ups with 2% cashback for premium members',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    fee: '0.5%',
    popular: true
  },
  {
    icon: Zap,
    title: 'Electricity Bills',
    description: 'Pay utility bills with automated reminders and rewards',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    fee: '1%'
  },
  {
    icon: ArrowUp,
    title: 'Water Bills',
    description: 'Municipal and private water providers across Africa',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    fee: '1%'
  },
  {
    icon: Tv,
    title: 'TV Subscriptions',
    description: 'DStv, GOtv, StarTimes with exclusive member discounts',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    fee: '1.5%'
  },
  {
    icon: Calendar,
    title: 'Flight Booking',
    description: 'Book flights with AI-powered price predictions',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    fee: '3%'
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Health, auto, property insurance with instant claims',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    fee: '2%'
  },
  {
    icon: Monitor,
    title: 'Internet Bills',
    description: 'Fiber, broadband, satellite internet payments',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    fee: '1%'
  },
  {
    icon: Wifi,
    title: 'Digital Services',
    description: 'Netflix, Spotify, gaming subscriptions',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    fee: '2%'
  },
  {
    icon: Gamepad2,
    title: 'Sports Betting',
    description: 'Bet9ja, SportyBet, 1xBet with responsible gaming tools',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    fee: '2.5%'
  },
  {
    icon: CreditCard,
    title: 'Bill Payments',
    description: 'Government fees, taxes, licenses, permits',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    fee: '1.5%'
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Uber, Bolt, ride-hailing and fuel payments',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    fee: '2%'
  },
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Rent payments, property management, mortgages',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    fee: '1%'
  }
];

const Services = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="neurapay-ui-theme">
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1">
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                    NeuraPay Services
                  </span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                  Experience the future of digital payments with AI-powered insights, 
                  competitive fees, and exclusive rewards for premium members.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <Badge className="bg-green-500/10 text-green-700 dark:text-green-300">
                    Low Fees
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-300">
                    AI-Powered
                  </Badge>
                  <Badge className="bg-blue-500/10 text-blue-700 dark:text-blue-300">
                    Premium Rewards
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card 
                      key={service.title} 
                      className="service-card relative group animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      
                      <CardHeader className="text-center">
                        <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-8 w-8 ${service.color}`} />
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <div className="flex items-center justify-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {service.fee} fee
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="text-center">
                        <CardDescription className="mb-6 text-sm leading-relaxed">
                          {service.description}
                        </CardDescription>
                        
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity">
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-20 text-center">
                <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">
                    Revenue Model Built for Scale
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    Our competitive transaction fees, premium memberships, and card services 
                    are designed to generate sustainable revenue while providing exceptional value to users.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500">$5M+</div>
                      <div className="text-sm text-foreground/60">Monthly Revenue Target</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-500">1M</div>
                      <div className="text-sm text-foreground/60">User Target</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500">0.5-3%</div>
                      <div className="text-sm text-foreground/60">Transaction Fees</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Services;
