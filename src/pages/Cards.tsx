import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Shield, Zap, Crown, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CardOrder {
  id: string;
  card_type: string;
  card_tier: string;
  physical: boolean;
  fee: number;
  status: string;
  created_at: string;
}

const Cards = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [orders, setOrders] = useState<CardOrder[]>([]);
  const [loading, setLoading] = useState(false);

  const cardTypes = [
    {
      id: 'standard',
      name: 'Standard Card',
      icon: CreditCard,
      description: 'Perfect for everyday spending',
      features: ['Contactless payments', 'Online purchases', 'ATM withdrawals', 'Mobile wallet support'],
      virtualFee: 6,
      physicalFee: 9,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'premium',
      name: 'Premium Card',
      icon: Shield,
      description: 'Enhanced features for frequent users',
      features: ['Higher limits', 'Priority support', 'Cashback rewards', 'Travel insurance'],
      virtualFee: 6,
      physicalFee: 9,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'business',
      name: 'Business Card',
      icon: Zap,
      description: 'Designed for business expenses',
      features: ['Expense tracking', 'Team cards', 'Business analytics', 'API integration'],
      virtualFee: 6,
      physicalFee: 9,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'elite',
      name: 'Elite Card',
      icon: Crown,
      description: 'Exclusive benefits for VIP members',
      features: ['Concierge service', 'Luxury rewards', 'Airport lounges', 'Personal advisor'],
      virtualFee: 6,
      physicalFee: 9,
      color: 'from-amber-500 to-amber-600'
    }
  ];

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('card_orders')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const orderCard = async (cardType: string, isPhysical: boolean) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to order a card.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const fee = isPhysical ? 9 : 6;
      
      const { error } = await supabase
        .from('card_orders')
        .insert({
          user_id: user.id,
          card_type: cardType,
          card_tier: 'standard',
          physical: isPhysical,
          fee: fee
        });

      if (error) throw error;

      // Create transaction record
      await supabase
        .from('transactions')
        .insert({
          user_id: user.id,
          amount: fee,
          type: 'debit',
          description: `${cardType} card order (${isPhysical ? 'Physical' : 'Virtual'})`,
          status: 'completed'
        });

      toast({
        title: "Card ordered successfully!",
        description: `Your ${cardType} ${isPhysical ? 'physical' : 'virtual'} card has been ordered.`,
      });

      fetchOrders();
    } catch (error: any) {
      toast({
        title: "Error ordering card",
        description: error.message,
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Premium Cards</h1>
            <p className="text-xl text-muted-foreground">
              Choose the perfect card for your lifestyle and business needs
            </p>
          </div>

          {/* Existing Orders */}
          {orders.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Your Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.map((order) => (
                  <Card key={order.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="capitalize">{order.card_type} Card</CardTitle>
                        <Badge variant={order.status === 'active' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                      </div>
                      <CardDescription>
                        {order.physical ? 'Physical' : 'Virtual'} • ${order.fee} fee
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Ordered on {new Date(order.created_at).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Card Types */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Available Cards</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cardTypes.map((card) => {
                const IconComponent = card.icon;
                return (
                  <Card key={card.id} className="glass-card group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center mb-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{card.name}</CardTitle>
                      <CardDescription className="text-lg">{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Features included:</h4>
                        <ul className="space-y-2">
                          {card.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4 pt-4 border-t">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Virtual Card</p>
                            <p className="text-2xl font-bold">${card.virtualFee}</p>
                            <Button 
                              className="w-full mt-2" 
                              variant="outline"
                              onClick={() => orderCard(card.id, false)}
                              disabled={loading}
                            >
                              Order Virtual
                            </Button>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">Physical Card</p>
                            <p className="text-2xl font-bold">${card.physicalFee}</p>
                            <Button 
                              className="w-full mt-2"
                              onClick={() => orderCard(card.id, true)}
                              disabled={loading}
                            >
                              Order Physical
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default Cards;
