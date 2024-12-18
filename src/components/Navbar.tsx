import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  // State variables to manage navbar behavior
  const [isScrolled, setIsScrolled] = useState(false);  // Tracks if page has been scrolled
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Tracks if mobile menu is open
  const [isBlogPage, setIsBlogPage] = useState(false);  // Tracks if current page is blog

  // Effect hook to handle scroll events and check current page
  useEffect(() => {
    // Function to update isScrolled state based on scroll position
    const handleScroll = () => {
      // Set isScrolled to true if page is scrolled more than 20px
      setIsScrolled(window.scrollY > 20);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Check if current page is blog by examining the URL
    setIsBlogPage(window.location.pathname.startsWith('/blog'));

    // Cleanup function to remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

  // Add a method to navigate to home page/hero section
  const navigateToHome = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    } else {
      // If already on home page, scroll to top (hero section)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Function to handle navigation/scrolling to different sections
  const scrollTo = (id: string) => {
    // Special case for blog: navigate to blog page
    if (id === 'blog') {
      window.location.href = '/blog';
      return;
    }

    // Use the translation mapping to get the correct element ID
    const elementId = translations[id as keyof typeof translations];

    if (isBlogPage) {
      // If on blog page, navigate to home page with correct anchor
      window.location.href = `/#${elementId}`;
    } else {
      // If on home page, scroll to the correct section
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close mobile menu after navigation
      }
    }
  };

  // Translation mapping from Spanish to English for element IDs
  const translations = {
    'servicios': 'services',
    'información': 'about',
    'casos': 'cases',
    'testimonios': 'testimonials',
    'contacto': 'contact',
    'blog': 'blog'
  };

  // Array of navigation items in Spanish
  const navItems = ['servicios', 'información', 'casos', 'testimonios', 'contacto', 'blog'];

  return (
    // Navigation bar with dynamic styling based on scroll and page state
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : isBlogPage ? 'bg-white' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and brand name as clickable link */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={navigateToHome}
          >
            {/* Shield icon with dynamic color based on scroll/page state */}
            <Shield className={`h-8 w-8 ${isScrolled || isBlogPage ? 'text-blue-600' : 'text-white'}`} />
            {/* Brand name with dynamic color */}
            <span className={`ml-2 text-xl font-bold ${isScrolled || isBlogPage ? 'text-gray-900' : 'text-white'}`}>
              CipherShield Security
            </span>
          </div>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex space-x-8">
            {/* Map through navItems to create navigation buttons */}
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`hover:text-blue-600 capitalize transition-colors ${
                  isScrolled || isBlogPage ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button (only visible on small screens) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hover:text-blue-600 ${
                isScrolled || isBlogPage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {/* Toggle between X and Menu icons based on menu state */}
              {isMenuOpen
                ? <X size={24} />
                : <Menu size={24} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (conditionally rendered when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Map through navItems to create mobile menu buttons */}
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