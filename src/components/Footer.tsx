
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AU</span>
              </div>
              <h3 className="text-xl font-bold">AfriQ Utility Hub</h3>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Powering Africa's digital transformation with seamless utility payments 
              and services across the continent.
            </p>
            <div className="flex items-center text-sm text-foreground/70">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>for Africa</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground transition-colors">Airtime & Data</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Electricity Bills</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Water Bills</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">TV Subscriptions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Flight Booking</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* Regions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Regions</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground transition-colors">West Africa</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">East Africa</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">North Africa</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Southern Africa</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Central Africa</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@afriqhub.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Lagos, Nigeria<br />Nairobi, Kenya<br />Cape Town, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70">
            © 2024 AfriQ Utility Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-foreground/70">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
