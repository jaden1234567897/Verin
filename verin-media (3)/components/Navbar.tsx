import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { 
      label: 'Services', 
      href: '#services',
      children: [
        { label: 'Individuals', href: 'individual-services' },
        { label: 'Companies', href: 'companies' }
      ]
    },
    { label: 'Contact', href: 'https://wa.me/971558943382' },
  ];

  const isExternal = (href: string) => href.startsWith('http');

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    if (isExternal(href)) return;
    
    e.preventDefault();
    
    if (onNavigate) {
      // Special routing for Pages
      if (href === 'individual-services') {
        onNavigate('individual-services');
        setIsMobileMenuOpen(false);
        return;
      }
      if (href === 'companies') {
        onNavigate('companies');
        setIsMobileMenuOpen(false);
        return;
      }

      // If we are on a sub-page and click a section link, go to home
      if (currentPage !== 'home') {
        onNavigate('home');
        // Note: For now, this lands on Home top. A more complex router would handle hash scrolling after mount.
      } else {
        // If on home, smooth scroll
        if (href === '#') {
           window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (href.startsWith('#')) {
           const element = document.querySelector(href);
           if (element) {
             element.scrollIntoView({ behavior: 'smooth' });
           }
        }
      }
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-verin-sand/95 backdrop-blur-md py-3 shadow-sm border-b border-verin-mocha/10' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex justify-end md:justify-between items-center">
        {/* Styled Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavigation(e, '#')}
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex flex-col items-center justify-center z-50 group cursor-pointer"
        >
          <span className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-verin-black leading-none group-hover:text-verin-mocha transition-colors duration-300">VERIN</span>
          <span className="font-sans text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.35em] text-verin-black/80 mt-1 group-hover:text-verin-mocha transition-colors duration-300">Media</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <a 
                href={link.href}
                target={isExternal(link.href) ? "_blank" : undefined}
                rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                onClick={(e) => handleNavigation(e, link.href)}
                className="flex items-center gap-1 text-sm font-sans tracking-widest uppercase text-verin-black/80 hover:text-verin-mocha transition-colors duration-300 pb-1 cursor-pointer"
              >
                {link.label}
                {link.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </a>
              
              {/* Dropdown Menu */}
              {link.children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-luxury min-w-[200px]">
                  <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-verin-mocha/10 p-2 flex flex-col gap-1 overflow-hidden">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={(e) => handleNavigation(e, child.href)}
                        className="block px-4 py-3 text-sm font-sans tracking-wide text-verin-black hover:bg-verin-sand hover:text-verin-mocha rounded-lg transition-colors whitespace-nowrap text-center cursor-pointer"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a 
            href="https://wa.me/971558943382"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-verin-black text-verin-white px-8 py-3 rounded-full text-sm font-medium hover:bg-verin-mocha transition-colors duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-verin-black cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 bg-verin-sand z-40 flex flex-col items-center justify-center transition-opacity duration-500 overflow-y-auto py-20 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center space-y-8 w-full">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col items-center gap-4 w-full">
                <a 
                  href={link.href}
                  target={isExternal(link.href) ? "_blank" : undefined}
                  rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className="font-serif text-3xl text-verin-black hover:text-verin-coral transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
                
                {/* Mobile Submenu */}
                {link.children && (
                  <div className="flex flex-col gap-4 items-center bg-white/50 w-full py-6 backdrop-blur-sm">
                    {link.children.map(child => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={(e) => handleNavigation(e, child.href)}
                        className="font-sans text-sm uppercase tracking-widest text-verin-mocha/80 hover:text-verin-black transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a 
              href="https://wa.me/971558943382"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 bg-verin-coral text-white px-10 py-4 rounded-full text-lg hover:bg-verin-mocha transition-colors shadow-xl cursor-pointer"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;