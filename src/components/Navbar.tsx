import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SecureGuard</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['services', 'about', 'cases', 'testimonials', 'contact'].map((item) => (
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
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['services', 'about', 'cases', 'testimonials', 'contact'].map((item) => (
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