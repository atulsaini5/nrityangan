import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkClass = 'text-brand-gold';
  const inactiveLinkClass = 'hover:text-brand-gold transition-colors duration-300';
  const getLinkClass = ({ isActive }: { isActive: boolean }) => isActive ? activeLinkClass : inactiveLinkClass;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-serif font-bold text-brand-brown tracking-wider">
            Nrityangan Kathak Studio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={getLinkClass}>
                {item.name}
              </NavLink>
            ))}
            <Link to="/book-trial-class" className="bg-brand-brown text-white px-6 py-2 rounded-full hover:bg-brand-gold transition-colors duration-300">
              Book Trial Class
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-brown focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
        <nav className="flex flex-col items-center space-y-4 py-6">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path} className={getLinkClass} onClick={() => setIsOpen(false)}>
              {item.name}
            </NavLink>
          ))}
          <Link to="/book-trial-class" className="bg-brand-brown text-white px-6 py-2 mt-4 rounded-full hover:bg-brand-gold transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Book Trial Class
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;