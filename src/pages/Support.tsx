
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, Phone, Mail, Book, Video, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const supportChannels = [
  {
    icon: MessageCircle,
    title: '24/7 Live Chat',
    description: 'Instant support with AI-powered assistance and human agents',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    availability: 'Always Available'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Direct phone support for urgent issues and premium members',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    availability: '24/7 for Premium+'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Detailed support via email with guaranteed response times',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    availability: '2-4 hours response'
  },
  {
    icon: Book,
    title: 'Knowledge Base',
    description: 'Comprehensive guides, tutorials, and FAQs',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    availability: 'Self-Service'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for all features',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    availability: 'On-Demand'
  },
  {
    icon: Clock,
    title: 'Priority Support',
    description: 'Dedicated support for Elite and Platinum members',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    availability: 'Premium Only'
  }
];

const faqItems = [
  {
    question: 'How do transaction fees work?',
    answer: 'Our fees range from 0.5% to 3% depending on the service type and your membership tier. Premium members enjoy reduced fees across all services.'
  },
  {
    question: 'How long does card delivery take?',
    answer: 'Virtual cards are instant. Physical cards: Essential (7-14 days), Premium (3-5 days), Elite (24-48 hours), Black (same day).'
  },
  {
    question: 'What countries do you support?',
    answer: 'We support 50+ African countries across all regions. Check our Countries page for specific availability in your region.'
  },
  {
    question: 'How secure is NeuraPay?',
    answer: 'We use bank-grade 256-bit encryption, multi-factor authentication, and AI-powered fraud detection to keep your money safe.'
  },
  {
    question: 'Can I upgrade my membership anytime?',
    answer: 'Yes, you can upgrade or downgrade your membership at any time. Changes take effect immediately with prorated billing.'
  }
];

const Support = () => {
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
                    Support Center
                  </span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                  Get help when you need it with our comprehensive support system. 
                  From instant chat to dedicated account managers, we're here for you.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <Badge className="bg-green-500/10 text-green-700 dark:text-green-300">
                    24/7 Available
                  </Badge>
                  <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-300">
                    AI-Powered
                  </Badge>
                  <Badge className="bg-blue-500/10 text-blue-700 dark:text-blue-300">
                    Multi-Channel
                  </Badge>
                </div>
              </div>

              {/* Support Channels */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {supportChannels.map((channel, index) => {
                  const IconComponent = channel.icon;
                  return (
                    <Card 
                      key={channel.title} 
                      className="service-card group animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader className="text-center">
                        <div className={`w-16 h-16 ${channel.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-8 w-8 ${channel.color}`} />
                        </div>
                        <CardTitle className="text-lg">{channel.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {channel.availability}
                        </Badge>
                      </CardHeader>
                      
                      <CardContent className="text-center">
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                          {channel.description}
                        </p>
                        <Button variant="outline" className="w-full">
                          Access Now
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* FAQ Section */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Frequently Asked Questions
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                  {faqItems.map((item, index) => (
                    <Card key={index} className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">{item.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/70">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Emergency */}
              <div className="glass-card p-8 rounded-3xl text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Emergency Support
                </h3>
                <p className="text-foreground/70 mb-6">
                  For urgent issues like fraud alerts, lost cards, or account security concerns, 
                  contact our emergency support line immediately.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">+234 800 NEURA</div>
                    <div className="text-sm text-foreground/60">Nigeria Emergency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">+254 800 NEURA</div>
                    <div className="text-sm text-foreground/60">Kenya Emergency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">+27 800 NEURA</div>
                    <div className="text-sm text-foreground/60">South Africa Emergency</div>
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

export default Support;
