
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import CountriesSection from '@/components/CountriesSection';
import FeatureHighlights from '@/components/FeatureHighlights';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="afriq-ui-theme">
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ServicesGrid />
          <CountriesSection />
          <FeatureHighlights />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
