import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogPage, setIsBlogPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Check if current page is blog
    setIsBlogPage(window.location.pathname.startsWith('/blog'));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'blog') {
      window.location.href = '/blog';
      return;
    }

    if (isBlogPage) {
      // If on blog page, navigate to home page first
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  const navItems = ['servicios', 'acerca', 'casos', 'testimonios', 'contacto', 'blog'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : isBlogPage ? 'bg-white' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Shield className={`h-8 w-8 ${isScrolled || isBlogPage ? 'text-blue-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled || isBlogPage ? 'text-gray-900' : 'text-white'}`}>SecureGuard</span>
          </div>

          <div className="hidden md:flex space-x-8">
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

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hover:text-blue-600 ${isScrolled || isBlogPage ? 'text-gray-700' : 'text-white'}`}
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