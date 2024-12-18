import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotHomePage, setIsNotHomePage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Check if we're on any page other than home
    setIsNotHomePage(window.location.pathname !== '/');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToHome = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollTo = (id: string) => {
    if (id === 'blog') {
      window.location.href = '/blog';
      return;
    }

    const elementId = translations[id as keyof typeof translations];

    if (isNotHomePage) {
      window.location.href = `/#${elementId}`;
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  const translations = {
    'servicios': 'services',
    'información': 'about',
    'casos': 'cases',
    'testimonios': 'testimonials',
    'contacto': 'contact',
    'blog': 'blog'
  };

  const navItems = ['servicios', 'información', 'casos', 'testimonios', 'contacto', 'blog'];

  const navClasses = `fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg' : ''}`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={navigateToHome}
          >
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              CipherShield Security
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-700 hover:text-blue-600 capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen
                ? <X size={24} />
                : <Menu size={24} />
              }
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;