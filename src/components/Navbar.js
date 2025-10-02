import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Custom smooth scrolling function - works better than default behavior
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`text-2xl font-bold ${scrolled ? 'text-ielts-blue' : 'text-white'} flex items-center`}>
              <i className="fas fa-graduation-cap mr-2"></i>
              <span>IELTS Pro</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`nav-link ${scrolled ? 'text-gray-700' : 'text-white'} font-medium hover:text-ielts-blue transition-colors`}>Home</a>
            <a href="#courses" className={`nav-link ${scrolled ? 'text-gray-700' : 'text-white'} font-medium hover:text-ielts-blue transition-colors`}>Courses</a>
            <a href="#about" className={`nav-link ${scrolled ? 'text-gray-700' : 'text-white'} font-medium hover:text-ielts-blue transition-colors`}>About</a>
            <a href="#contact" className={`nav-link ${scrolled ? 'text-gray-700' : 'text-white'} font-medium hover:text-ielts-blue transition-colors`}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`hamburger md:hidden ${scrolled ? 'text-ielts-blue' : 'text-white'} focus:outline-none ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <div className={`hamburger-line w-6 h-0.5 ${scrolled ? 'bg-ielts-blue' : 'bg-white'} rounded`}></div>
              <div className={`hamburger-line w-6 h-0.5 ${scrolled ? 'bg-ielts-blue' : 'bg-white'} rounded`}></div>
              <div className={`hamburger-line w-6 h-0.5 ${scrolled ? 'bg-ielts-blue' : 'bg-white'} rounded`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 pb-4 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-3 pt-4">
            <a href="#home" className={`${scrolled ? 'text-gray-700' : 'text-white'} font-medium hover:text-ielts-blue transition-colors`}>Home</a>
            <a href="#courses" className={`${scrolled ? 'text-gray-700' : 'text-white'} font-medium hover:text-ielts-blue transition-colors`}>Courses</a>
            <a href="#about" className={`${scrolled ? 'text-gray-700' : 'text-white'} font-medium hover:text-ielts-blue transition-colors`}>About</a>
            <a href="#contact" className={`${scrolled ? 'text-gray-700' : 'text-white'} font-medium hover:text-ielts-blue transition-colors`}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;