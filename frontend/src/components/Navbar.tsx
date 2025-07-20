import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 🔥
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 600; // 🔥 adjust this to your Hero section height in px
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Who We Are', path: '/who-we-are' },
    { name: 'Vision', path: '/vision' },
    { name: 'Mission', path: '/mission' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl my-5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img className='h-8' src={Logo} alt="Logo" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`uppercase font-medium transition-smooth ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://instagram.com/filmfluenceindia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Instagram className="w-5 h-5 text-white" />
              <span>@filmfluenceindia</span>
            </a>
            <Link to="/contact">
              <Button className="btn-influencer">I'm An Influencer</Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border/50">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium transition-smooth ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-border/50">
              <a
                href="https://instagram.com/filmfluence"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Instagram className="w-5 h-5" />
                <span>@filmfluence</span>
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="btn-influencer w-full">I'm An Influencer</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
