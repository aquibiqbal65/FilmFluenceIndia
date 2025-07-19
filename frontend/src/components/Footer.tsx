import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, Film } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <Film className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">FilmFluence</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Where cinema meets influence marketing. We create authentic, cinematic campaigns 
              that transform how brands connect with their audiences through powerful storytelling.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/filmfluence"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center hover:shadow-glow transition-smooth"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:hello@filmfluence.com"
                className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center hover:shadow-glow transition-smooth"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/who-we-are" className="text-muted-foreground hover:text-primary transition-smooth">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/vision" className="text-muted-foreground hover:text-primary transition-smooth">
                  Vision
                </Link>
              </li>
              <li>
                <Link to="/mission" className="text-muted-foreground hover:text-primary transition-smooth">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-muted-foreground hover:text-primary transition-smooth">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@filmfluence.com</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Los Angeles, CA</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Instagram className="w-5 h-5 text-primary" />
                <span>@filmfluence</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} FilmFluence. All rights reserved. Made with ❤️ for creators and brands.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;