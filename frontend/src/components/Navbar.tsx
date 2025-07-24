import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (target: string, isRoute: boolean = false) => {
    if (isRoute) {
      navigate(`/${target}`);
    } else {
      if (location.pathname !== "/") {
        navigate("/");

        // wait for the homepage to mount, then scroll
        setTimeout(() => scrollToSection(target), 100);
      } else {
        scrollToSection(target);
      }
    }
    setIsOpen(false); // close mobile menu if open
  };

  const navItems = [
    { name: "WHO WE ARE", target: "who-we-are", route: false },
    { name: "HOW IT WORKS", target: "how-it-works", route: false },
    { name: "FAQs", target: "faqs", route: false },
    { name: "CAREERS", target: "careers", route: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl my-5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <img className="sm:h-11 h-8" src={Logo} alt="Logo" />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.target, item.route)}
                className="animated-underline text-white hover:text-primary font-medium transition-all duration-300"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("contact", true)}
              className="bg-primary sm:inline-block hidden p-4 text-primary-foreground font-[550] rounded-xs transition-all duration-300 uppercase"
            >
              <span className="animatedButton-underline">Contact Us</span>
            </button>
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
        <div className="md:hidden bg-black border-t border-border/50 shadow-lg animate-slide-down">
          <div className="px-6 py-5 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.target, item.route)}
                className="text-white hover:text-primary font-medium py-2 transition-all duration-300 text-left"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("contact", true)}
              className="mt-2 w-full text-center bg-primary text-primary-foreground font-[550] rounded-md py-3 uppercase transition-all duration-300 hover:bg-primary/90"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
