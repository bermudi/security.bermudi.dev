import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

// Add font imports
import '@fontsource/oswald';
import '@fontsource/dm-serif-display';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotHomePage, setIsNotHomePage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
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

  const getNavClasses = () => {
    if (isNotHomePage) {
      return `fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg' : ''}`;
    }
    return `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`;
  };

  const getTextColorClasses = (isButton = false) => {
    if (isNotHomePage || isScrolled) {
      return isButton ? 'text-gray-700 hover:text-blue-600' : 'text-gray-900';
    }
    return 'text-white hover:text-gray-200';
  };

  const getLogoColorClass = () => {
    if (isNotHomePage || isScrolled) {
      return 'text-blue-600';
    }
    return 'text-white';
  };

  return (
    <nav className={getNavClasses()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={navigateToHome}
          >
            <Shield className={`h-10 w-10 ${getLogoColorClass()}`} />
            <div className="ml-3 flex flex-col leading-tight">
              <div className="flex items-baseline">
                <span className={`text-2xl font-medium tracking-tight font-['Oswald'] ${isNotHomePage || isScrolled ? 'text-gray-900' : 'text-white'}`}>
                  Cipher
                </span>
                <span className={`text-2xl tracking-tight font-['DM_Serif_Display'] ${getLogoColorClass()}`}>
                  Shield
                </span>
              </div>
              <span className={`text-sm font-medium tracking-wider uppercase ${getTextColorClasses()}`}>
                Security
              </span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`${getTextColorClasses(true)} capitalize transition-colors`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={getTextColorClasses(true)}
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