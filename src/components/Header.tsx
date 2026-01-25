import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoSvg from '@/assets/logo.svg';
import { trackEvent } from '@/lib/analytics';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = useCallback((sectionId: string) => {
    trackEvent('nav_click', {
      destination: sectionId,
      context: isHomePage ? 'home' : 'internal',
    });

    if (!isHomePage) {
      // Navigate to home first, then scroll after a short delay
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isHomePage, navigate]);

  const navItems = ['Work', 'About', 'Contact'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background border-b border-border/50`}
      >
        <div className="container">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'py-4' : 'py-6 md:py-8'
          }`}>
            {/* Logo */}
            <Link 
              to="/" 
              className="relative group flex items-center gap-3"
            >
              <img 
                src={logoSvg} 
                alt="Jack Ge logo" 
                className="w-8 h-8 transition-all duration-300 group-hover:opacity-70"
              />
              {/* Full name - hidden on mobile */}
              <span className="hidden sm:block text-sm tracking-wide text-foreground font-sans">
                Jack Ge
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-[11px] tracking-[0.2em] uppercase font-body transition-colors duration-300 group py-2 text-muted-foreground hover:text-foreground"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full bg-foreground" />
                </button>
              ))}
            </nav>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, pointerEvents: 'auto' as const } : { opacity: 0, pointerEvents: 'none' as const }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setMobileMenuOpen(false);
              }}
              className="text-2xl font-display tracking-wide text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 + 0.1 }}
            >
              {item}
            </motion.button>
          ))}
          
        </div>
      </motion.div>
    </>
  );
};

export default Header;
