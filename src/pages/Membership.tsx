
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Crown, Check, Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MembershipTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  color: string;
}

interface UserMembership {
  id: string;
  tier_id: string;
  status: string;
  membership_tiers: MembershipTier;
}

const Membership = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [tiers, setTiers] = useState<MembershipTier[]>([]);
  const [currentMembership, setCurrentMembership] = useState<UserMembership | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMembershipData();
  }, [user]);

  const fetchMembershipData = async () => {
    try {
      // Fetch all membership tiers
      const { data: tiersData, error: tiersError } = await supabase
        .from('membership_tiers')
        .select('*')
        .order('price', { ascending: true });

      if (tiersError) throw tiersError;
      setTiers(tiersData || []);

      // Fetch current user membership
      if (user) {
        const { data: membershipData, error: membershipError } = await supabase
          .from('user_memberships')
          .select(`
            id,
            tier_id,
            status,
            membership_tiers (
              id,
              name,
              price,
              features,
              color
            )
          `)
          .eq('user_id', user.id)
          .single();

        if (membershipError && membershipError.code !== 'PGRST116') {
          throw membershipError;
        }
        
        setCurrentMembership(membershipData);
      }
    } catch (error) {
      console.error('Error fetching membership data:', error);
    }
  };

  const upgradeMembership = async (tierId: string, tierName: string, price: number) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to upgrade your membership.",
        variant: "destructive",
      });
      return;
    }

    if (currentMembership?.tier_id === tierId) {
      toast({
        title: "Already subscribed",
        description: `You're already on the ${tierName} plan.`,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      if (currentMembership) {
        // Update existing membership
        const { error: updateError } = await supabase
          .from('user_memberships')
          .update({ tier_id: tierId })
          .eq('id', currentMembership.id);

        if (updateError) throw updateError;
      } else {
        // Create new membership
        const { error: insertError } = await supabase
          .from('user_memberships')
          .insert({
            user_id: user.id,
            tier_id: tierId
          });

        if (insertError) throw insertError;
      }

      // Create transaction record if not free tier
      if (price > 0) {
        await supabase
          .from('transactions')
          .insert({
            user_id: user.id,
            amount: price,
            type: 'debit',
            description: `${tierName} membership upgrade`,
            status: 'completed'
          });
      }

      toast({
        title: "Membership updated!",
        description: `Welcome to ${tierName}! Your membership has been upgraded.`,
      });

      fetchMembershipData();
    } catch (error: any) {
      toast({
        title: "Error updating membership",
        description: error.message,
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      gray: 'from-gray-500 to-gray-600',
      blue: 'from-blue-500 to-blue-600', 
      purple: 'from-purple-500 to-purple-600',
      gold: 'from-amber-500 to-amber-600'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Crown className="h-12 w-12 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Membership Tiers</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your financial journey. Upgrade anytime to unlock premium features and benefits.
            </p>
          </div>

          {currentMembership && (
            <div className="mb-8 text-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Current Plan: {currentMembership.membership_tiers.name} (${currentMembership.membership_tiers.price}/month)
              </Badge>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => {
              const isCurrentPlan = currentMembership?.tier_id === tier.id;
              const isPopular = tier.name === 'Premium';

              return (
                <Card 
                  key={tier.id} 
                  className={`glass-card relative group hover:shadow-xl transition-all duration-300 ${
                    isPopular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-600 text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${getColorClasses(tier.color)} flex items-center justify-center mb-4`}>
                      <Crown className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold">
                      ${tier.price}
                      <span className="text-sm font-normal text-muted-foreground">/month</span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full" 
                      variant={isCurrentPlan ? "secondary" : "default"}
                      onClick={() => upgradeMembership(tier.id, tier.name, tier.price)}
                      disabled={loading || isCurrentPlan}
                    >
                      {isCurrentPlan ? 'Current Plan' : `Choose ${tier.name}`}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              All plans include our core features with a 30-day money-back guarantee
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default Membership;
