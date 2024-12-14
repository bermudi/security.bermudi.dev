import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

// Navbar component definition
const Navbar = () => {
  // State variables to manage navbar behavior
  const [isScrolled, setIsScrolled] = useState(false);  // Tracks if page has been scrolled
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Tracks if mobile menu is open
  const [isBlogPage, setIsBlogPage] = useState(false);  // Tracks if current page is blog

  // Effect hook to handle scroll events and check current page
  useEffect(() => {
    // Function to update isScrolled state based on scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check if current page is blog
    setIsBlogPage(window.location.pathname.startsWith('/blog'));

    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle navigation/scrolling to different sections
  const scrollTo = (id: string) => {
    if (id === 'blog') {
      // If blog is clicked, navigate to blog page
      window.location.href = '/blog';
      return;
    }

    if (isBlogPage) {
      // If on blog page, navigate to home page first, then to specific section
      window.location.href = `/#${id}`;
    } else {
      // If on home page, scroll to the section smoothly
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);  // Close mobile menu after navigation
      }
    }
  };

  // Array of navigation items
  const navItems = ['services', 'about', 'cases', 'testimonials', 'contact', 'blog'];

  return (
    // Navigation bar with dynamic styling based on scroll and page state
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : isBlogPage ? 'bg-white' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Shield className={`h-8 w-8 ${isScrolled || isBlogPage ? 'text-blue-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled || isBlogPage ? 'text-gray-900' : 'text-white'}`}>SecureGuard</span>
          </div>

          {/* Desktop navigation menu */}
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            {/* Mobile menu toggle button */}
            <button
              // Event handler to toggle the mobile menu open/closed
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              // Dynamic className based on scroll position and current page
              className={`hover:text-blue-600 ${
                // Text color changes based on whether the page is scrolled or if it's the blog page
                isScrolled || isBlogPage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {/* Conditional rendering of icon based on menu state */}
              {isMenuOpen 
                ? <X size={24} /> // 'X' icon when menu is open (for closing)
                : <Menu size={24} /> // 'Menu' icon when menu is closed (for opening)
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (conditionally rendered) */}
      {isMenuOpen && (
        // Remove the extra curly braces here
        <div className="md:hidden bg-white">
          {/* Inner container for menu items with padding and spacing */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Map through navItems array to create menu buttons */}
            {navItems.map((item) => (
              <button
                // Unique key for each button (React requirement for lists)
                key={item}
                // Click handler to scroll/navigate to the selected section
                onClick={() => scrollTo(item)}
                // Styling classes for the button
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 capitalize"
              >
                {/* Display the navigation item text */}
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