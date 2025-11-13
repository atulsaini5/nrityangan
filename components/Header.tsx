import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '#programs' },
  { name: 'Gallery', path: '#gallery' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (hash: string) => {
    const executeScroll = () => {
      const section = document.getElementById(hash.replace('#', ''));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(executeScroll, 300);
    } else {
      executeScroll();
    }
  };

  const activeLinkClass = 'text-brand-terracotta';
  const inactiveLinkClass = 'text-brand-ink/80 hover:text-brand-terracotta transition-colors duration-300';
  const getLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? `${activeLinkClass} font-semibold` : inactiveLinkClass);

  const renderNavLink = (item: { name: string; path: string }) => {
    if (item.path.startsWith('#')) {
      return (
        <button
          key={item.name}
          type="button"
          onClick={() => {
            scrollToSection(item.path);
            setIsOpen(false);
          }}
          className="text-brand-ink/80 hover:text-brand-terracotta transition-colors duration-300"
        >
          {item.name}
        </button>
      );
    }

    return (
      <NavLink key={item.name} to={item.path} className={getLinkClass}>
        {item.name}
      </NavLink>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-cream/95 shadow-md backdrop-blur' : 'bg-transparent'
    }`}>
      <div className="bg-brand-ink text-brand-cream text-xs tracking-widest uppercase hidden md:block">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          <span>Traditional Kathak Training &amp; Performances</span>
          <span>Call: +91 99999 00000 | nrityanganacademy@gmail.com</span>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl md:text-3xl font-serif font-semibold tracking-[0.35em] uppercase text-brand-ink">
            Nrityangan Kathak
          </Link>
          <nav className="hidden lg:flex items-center space-x-8 text-sm">
            {navItems.map(renderNavLink)}
            <Link
              to="/book-trial-class"
              className="ml-4 inline-flex items-center rounded-full border border-brand-terracotta/70 px-6 py-2 text-brand-terracotta hover:bg-brand-terracotta hover:text-brand-cream transition-colors duration-300"
            >
              Trial Class
            </Link>
          </nav>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-brand-ink/20 p-2 text-brand-ink focus:outline-none"
            aria-label="Toggle navigation"
          >
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
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden bg-brand-cream/95 backdrop-blur`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6 text-base">
          {navItems.map(renderNavLink)}
          <Link
            to="/book-trial-class"
            className="inline-flex items-center rounded-full border border-brand-terracotta/70 px-8 py-2 text-brand-terracotta hover:bg-brand-terracotta hover:text-brand-cream transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Trial Class
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
