import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Country {
  name: string;
  code: string;
  services: number;
  popular?: boolean;
}

interface RegionData {
  countries: Country[];
}

const africanRegions: Record<string, RegionData> = {
  'North Africa': {
    countries: [
      { name: 'Egypt', code: 'EG', services: 8, popular: true },
      { name: 'Libya', code: 'LY', services: 6 },
      { name: 'Tunisia', code: 'TN', services: 7 },
      { name: 'Algeria', code: 'DZ', services: 6 },
      { name: 'Morocco', code: 'MA', services: 8, popular: true },
      { name: 'Sudan', code: 'SD', services: 5 },
      { name: 'South Sudan', code: 'SS', services: 4 },
    ]
  },
  'West Africa': {
    countries: [
      { name: 'Nigeria', code: 'NG', services: 10, popular: true },
      { name: 'Ghana', code: 'GH', services: 8, popular: true },
      { name: 'Senegal', code: 'SN', services: 7 },
      { name: 'Mali', code: 'ML', services: 5 },
      { name: 'Burkina Faso', code: 'BF', services: 5 },
      { name: 'Côte d\'Ivoire', code: 'CI', services: 7 },
      { name: 'Liberia', code: 'LR', services: 4 },
      { name: 'Sierra Leone', code: 'SL', services: 4 },
      { name: 'Guinea', code: 'GN', services: 4 },
      { name: 'Togo', code: 'TG', services: 5 },
    ]
  },
  'East Africa': {
    countries: [
      { name: 'Kenya', code: 'KE', services: 9, popular: true },
      { name: 'Tanzania', code: 'TZ', services: 8 },
      { name: 'Uganda', code: 'UG', services: 7 },
      { name: 'Rwanda', code: 'RW', services: 8, popular: true },
      { name: 'Ethiopia', code: 'ET', services: 6 },
      { name: 'Somalia', code: 'SO', services: 4 },
      { name: 'Eritrea', code: 'ER', services: 3 },
      { name: 'Djibouti', code: 'DJ', services: 5 },
    ]
  },
  'Southern Africa': {
    countries: [
      { name: 'South Africa', code: 'ZA', services: 10, popular: true },
      { name: 'Botswana', code: 'BW', services: 7 },
      { name: 'Namibia', code: 'NA', services: 6 },
      { name: 'Zambia', code: 'ZM', services: 6 },
      { name: 'Zimbabwe', code: 'ZW', services: 5 },
      { name: 'Mozambique', code: 'MZ', services: 5 },
      { name: 'Madagascar', code: 'MG', services: 4 },
      { name: 'Mauritius', code: 'MU', services: 8, popular: true },
      { name: 'Lesotho', code: 'LS', services: 4 },
      { name: 'Eswatini', code: 'SZ', services: 4 },
    ]
  },
  'Central Africa': {
    countries: [
      { name: 'Cameroon', code: 'CM', services: 7 },
      { name: 'Democratic Republic of Congo', code: 'CD', services: 5 },
      { name: 'Central African Republic', code: 'CF', services: 3 },
      { name: 'Chad', code: 'TD', services: 4 },
      { name: 'Republic of the Congo', code: 'CG', services: 5 },
      { name: 'Equatorial Guinea', code: 'GQ', services: 4 },
      { name: 'Gabon', code: 'GA', services: 6 },
      { name: 'São Tomé and Príncipe', code: 'ST', services: 3 },
    ]
  }
};

const CountriesSection = () => {
  const [activeRegion, setActiveRegion] = useState('West Africa');

  const getServiceBadgeColor = (services: number) => {
    if (services >= 8) return 'bg-green-500/10 text-green-700 dark:text-green-300';
    if (services >= 6) return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300';
    return 'bg-orange-500/10 text-orange-700 dark:text-orange-300';
  };

  return (
    <section id="countries" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Available Across Africa
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Serving customers in over 50 African countries with localized payment solutions
          </p>
        </div>

        <Tabs value={activeRegion} onValueChange={setActiveRegion} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {Object.keys(africanRegions).map((region) => (
              <TabsTrigger key={region} value={region} className="text-xs sm:text-sm">
                {region.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(africanRegions).map(([region, data]) => (
            <TabsContent key={region} value={region} className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {data.countries.slice(0, 10).map((country, index) => (
                  <Card 
                    key={country.code} 
                    className="service-card relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {country.popular && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{country.name}</CardTitle>
                        <div className={`w-8 h-6 rounded-sm bg-gradient-to-r from-green-500 to-red-500 flex items-center justify-center text-white text-xs font-bold`}>
                          {country.code}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge className={getServiceBadgeColor(country.services)}>
                          {country.services} Services
                        </Badge>
                        <span className="text-sm text-foreground/60">Available</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-sm text-foreground/60">
                  Showing top 10 countries in {region}. More countries coming soon!
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CountriesSection;
